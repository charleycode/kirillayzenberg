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
    slug: "/nextres-llc-leading-the-way-in-wholesale-mortgage-lending",
    title: "Nextres LLC: Leading the Way in Wholesale Mortgage Lending",
    excerpt:
      "Nextres LLC is a specialized wholesale mortgage lender dedicated to supporting mortgage brokers, credit unions, and banks.",
    date: "2025-08-15",
  },
  {
    slug: "/edscr-llc-kirill-ayzenbergs-innovative-software-company-revolutionizing-retail-mortgage-lending",
    title: "EDSCR LLC: Kirill Ayzenberg’s Innovative Software Company Revolutionizing Retail Mortgage Lending",
    excerpt:
      "In the rapidly evolving world of lending, technology is no longer just a convenience — it’s a competitive necessity. EDSCR LLC, founded by Kirill Ayzenberg, is at the forefront of this transformation, delivering cutting-edge software solutions tailored to the unique needs of retail mortgage lenders.",
    date: "2025-08-15",
  },
  {
    slug: "/finresi-llc-your-partner-in-real-estate-investment-trust-growth",
    title: "Finresi LLC: Your Partner in Real Estate Investment Trust Growth",
    excerpt:
      "In today’s competitive real estate market, strategic investment and reliable partnerships are the foundation for long-term growth. Finresi LLC stands out as a trusted name in the world of Real Estate Investment Trusts (REITs), offering expertise, innovation, and a commitment to delivering consistent returns for investors.",
    date: "2025-08-15",
  },
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
  {
    slug: "/kirill-ayzenberg-dscr-loan",
    title: "Kirill Ayzenberg: DSCR Loan Solutions for Real Estate Investors",
    excerpt:
      "Learn how Kirill Ayzenberg helps real estate investors secure DSCR loans with flexible terms and competitive rates.",
    date: "2025-08-10",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Kirill Ayzenberg Blog</h1>
          <h2 className="text-xl md:text-5xl font-semibold tracking-tight">Connect with <a href="https://kirillayzenberg.com">Kirill Ayzenberg and Find Out More About Us!</a></h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Mortgage lending insights, resources, and guides by Kirill Ayzenberg
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}