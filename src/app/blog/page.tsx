// app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Kirill Ayzenberg",
  description:
    "Mortgage lending insights, resources, and guides from Kirill Ayzenberg.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Kirill Ayzenberg",
    description:
      "Mortgage lending insights, resources, and guides from Kirill Ayzenberg.",
    url: "https://kirillayzenberg.com/blog",
    siteName: "Kirill Ayzenberg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Kirill Ayzenberg",
    description:
      "Mortgage lending insights, resources, and guides from Kirill Ayzenberg.",
  },
};

const posts = [
  {
    slug: "/mortgage-lending-resources",
    title: "Mortgage Lending Resources: A Complete Guide for Homebuyers and Investors",
    excerpt:
      "Everything you need to understand mortgages—loan types, rates, process, and tips to qualify—plus actionable resources.",
    date: "2025-08-10",
  },
  {
    slug: "/nexys-llc-loan-origination-software-company",
    title: "Nexys LLC: Loan Origination Software Company for Modern Lenders",
    excerpt:
      "Discover how Nexys LLC develops innovative loan origination software solutions for private lenders, banks, and real estate professionals.",
    date: "2025-08-10",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Mortgage lending insights, resources, and guides.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-10">
        <div className="max-w-3xl mx-auto grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="border rounded-2xl p-6 hover:shadow-sm transition">
              <header className="flex items-center justify-between gap-2">
                <h2 className="text-xl md:text-2xl font-semibold">
                  <Link href={post.slug} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <time className="text-sm text-gray-500" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </header>
              <p className="mt-3 text-gray-700">{post.excerpt}</p>
              <div className="mt-4">
                <Link
                  href={post.slug}
                  className="inline-flex items-center rounded-xl px-4 py-2 border border-gray-300 hover:bg-gray-100"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}