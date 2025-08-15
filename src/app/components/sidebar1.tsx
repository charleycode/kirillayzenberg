// components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type MenuItem = {
  label: string;
  href?: string; // leaf items have href
  children?: MenuItem[]; // groups have children
};


export type SidebarProps = {
  items: MenuItem[];
  title?: string;
  className?: string;
};

export default function Sidebar({ items, title = "Menu", className = "" }: SidebarProps) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  // Initialize groups open state based on current path
  useEffect(() => {
    const next: Record<string, boolean> = {};
    const visit = (nodes: MenuItem[], prefix = "") => {
      for (const n of nodes) {
        const key = `${prefix}${n.label}`;
        if (n.children?.length) {
          const containsActive = flatten(n.children).some((c) => c.href && pathname?.startsWith(c.href));
          next[key] = containsActive; // open if active path is inside
          visit(n.children, key + "/");
        }
      }
    };
    visit(items);
    setOpenGroups((prev) => ({ ...prev, ...next }));
  }, [pathname, items]);


  return (
    <aside className={`relative w-72 shrink-0 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:bg-neutral-900/60 ${className}`}>
      {/* Mobile toggle */}
      <div className="sticky top-0 z-20 bg-white/80 px-4 py-3 dark:bg-neutral-900/80 md:hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-wide uppercase opacity-80">{title}</h2>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-controls="sidebar-nav"
            className="rounded-xl px-3 py-1.5 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
          </button>
        </div>
      </div>

      <nav
        id="sidebar-nav"
        aria-label={title}
        className={`md:block block md:sticky md:top-16 md:max-h-[calc(100dvh-4rem)] md:overflow-y-auto`}
      >
        <ul className="p-3 text-sm">
          {items.map((item) => (
            <li key={item.label} className="mb-1">
              {item.children?.length ? (
                <Group
                  item={item}
                  open={openGroups[item.label]}
                  onToggle={() =>
                    setOpenGroups((s) => ({ ...s, [item.label]: !s[item.label] }))
                  }
                  pathname={pathname || "/"}
                />
              ) : (
                <Leaf item={item} active={isActive(pathname, item.href)} />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer quick search */}
    </aside>
  );
}

function Group({ item, open, onToggle, pathname }: { item: MenuItem; open?: boolean; onToggle: () => void; pathname: string; }) {
  const isSectionActive = item.children?.some((c) => (c.href ? pathname.startsWith(c.href) : false));
  return (
    <div className="rounded-xl">
      <button
        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium ${
          isSectionActive ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
        }`}
        aria-expanded={!!open}
        onClick={onToggle}
      >
        <span>{item.label}</span>
        <span className="text-xs opacity-60">{open ? "▲" : "▼"}</span>
      </button>
      <ul className={`${open ? "block" : "hidden"} ml-2 border-l pl-2"`}> 
        {item.children?.map((child) => (
          <li key={child.label} className="mb-1">
            {child.children?.length ? (
              <Group item={child} open={open} onToggle={onToggle} pathname={pathname} />
            ) : (
              <Leaf item={child} active={isActive(pathname, child.href)} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Leaf({ item, active }: { item: MenuItem; active: boolean }) {
  return (
    <Link
      href={item.href || "#"}
      className={`block rounded-lg px-3 py-2 ${
        active
          ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
          : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
      }`}
    >
      {item.label}
    </Link>
  );
}

function isActive(pathname: string | null, href?: string) {
  if (!pathname || !href) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function flatten(items: MenuItem[]): MenuItem[] {
  return items.flatMap((it) => (it.children ? flatten(it.children) : [it]));
}

