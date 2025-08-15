// app/mortgages/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

const SITE = {
  name: "Kirill Ayzenberg Mortgage Lender",
  url: "https://kirillayzenberg.com",
  phone: "(657) 330-8857",
  email: "kirillayzenbergseo@gmail.com",
};

export const metadata: Metadata = {
  title: "Understanding Mortgages: A Complete Guide for Homebuyers and Investors",
  description:
    "Learn the basics of mortgages—types, rates, process, and tips to qualify—so you can choose the right loan with confidence.",
  alternates: { canonical: "/mortgage-lending-resources" },
  openGraph: {
    title: "Understanding Mortgages: A Complete Guide",
    description:
      "Types of mortgages, how rates work, and practical steps to qualify.",
    url: `${SITE.url}/mortgage-lending-resources`,
    siteName: SITE.name,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Mortgages: A Complete Guide",
    description:
      "Types of mortgages, how rates work, and practical steps to qualify.",
  },
};

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a mortgage?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A mortgage is a loan secured by real estate. The property is collateral; if payments are not made, the lender can foreclose.",
        },
      },
      {
        "@type": "Question",
        name: "What affects my mortgage rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Credit score, down payment, loan term, debt-to-income ratio, and market conditions can all influence your rate.",
        },
      },
      {
        "@type": "Question",
        name: "Fixed-rate vs adjustable-rate mortgage?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Fixed-rate loans keep the same rate for the full term. ARMs start fixed for a period, then adjust periodically based on an index.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get pre-approved?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Share your income, assets, credit, and debts with a lender. They’ll issue a letter stating the estimated amount you can borrow.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function MortgagesPage() {

  return (
    <main className="min-h-screen bg-white">
      <FaqJsonLd />

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16 bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Understanding Mortgages: A Complete Guide for Homebuyers and Investors
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            <a href="https://kirillayzenberg.com/blog">Learn the essentials—loan types, rates, the process, and actionable
            tips</a>—so you can choose the right mortgage with confidence.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-black hover:bg-gray-900 transition"
            >
              Get a rate quote from Kirill
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-gray-300 hover:bg-gray-100 transition"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* On-page nav */}

      {/* Content */}
      <article className="px-6 md:px-10 lg:px-16 py-10">
        <div className="max-w-3xl mx-auto space-y-12">
          <section id="what-is-a-mortgage">
            <h2 className="text-2xl md:text-3xl font-semibold">What is a Mortgage?</h2>
            <p className="mt-4 text-gray-700 leading-7">
              A <strong>mortgage</strong> is a loan used to purchase real estate, and the
              property itself serves as collateral. If the borrower cannot meet
              repayment obligations, the lender may take ownership of the property
              through foreclosure. Mortgages let buyers pay over time rather than
              covering the full price upfront.
            </p>
          </section>

          <section id="components">
            <h2 className="text-2xl md:text-3xl font-semibold">Key Components</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Principal",
                  d: "The amount you borrow to buy the property.",
                },
                {
                  t: "Interest",
                  d: "The cost of borrowing, expressed as a percentage rate.",
                },
                {
                  t: "Taxes",
                  d: "Local property taxes; often escrowed in your monthly payment.",
                },
                {
                  t: "Insurance",
                  d: "Homeowner’s insurance and, in some cases, mortgage insurance (PMI).",
                },
              ].map((item) => (
                <li key={item.t} className="border rounded-2xl p-4">
                  <h3 className="font-medium">{item.t}</h3>
                  <p className="text-gray-700 mt-1">{item.d}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="types">
            <h2 className="text-2xl md:text-3xl font-semibold">Types of Mortgages</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-medium">Fixed-Rate Mortgage</h3>
                <p className="text-gray-700 mt-1">
                  The interest rate stays the same for the full term (e.g., 15 or 30
                  years). Payments are predictable.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Adjustable-Rate Mortgage (ARM)</h3>
                <p className="text-gray-700 mt-1">
                  Starts with a fixed period (e.g., 5, 7, or 10 years), then adjusts
                  periodically based on a market index. Payments can go up or down.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Government-Backed Loans</h3>
                <p className="text-gray-700 mt-1">
                  FHA, VA, and USDA loans can offer lower down payments and flexible
                  qualifying. Terms and eligibility vary.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Interest-Only Mortgages</h3>
                <p className="text-gray-700 mt-1">
                  You pay only the interest for an initial period, then principal plus
                  interest later. Riskier if home values fall.
                </p>
              </div>
            </div>
          </section>

          <section id="process">
            <h2 className="text-2xl md:text-3xl font-semibold">The Mortgage Process</h2>
            <ol className="mt-4 space-y-4">
              <li>
                <span className="font-medium">Pre-Approval:</span>{" "}
                Lender reviews your credit, income, assets, and debts to estimate how
                much you can borrow.
              </li>
              <li>
                <span className="font-medium">House Hunting:</span>{" "}
                Shop within your budget; consider taxes, HOA fees, and repairs.
              </li>
              <li>
                <span className="font-medium">Application & Underwriting:</span>{" "}
                Submit full documentation. The lender verifies your info and orders an
                appraisal.
              </li>
              <li>
                <span className="font-medium">Closing:</span>{" "}
                You sign final documents, the loan funds, and you get the keys.
              </li>
            </ol>
          </section>

          <section id="rates">
            <h2 className="text-2xl md:text-3xl font-semibold">
              What Affects Your Mortgage Rate
            </h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Credit score and payment history</li>
              <li>Down payment size and loan-to-value (LTV)</li>
              <li>Loan term (e.g., 15 vs 30 years)</li>
              <li>Debt-to-income (DTI) ratio</li>
              <li>Market conditions and rate indices</li>
            </ul>
          </section>

          <section id="tips">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Tips to Secure the Best Mortgage
            </h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[
                "Check and improve your credit score before applying.",
                "Save for a larger down payment to reduce LTV and avoid PMI when possible.",
                "Get quotes from multiple lenders; compare APR and total cost, not just the rate.",
                "Consider shorter terms or points depending on your hold period.",
              ].map((tip, i) => (
                <div key={i} className="border rounded-2xl p-4 text-gray-700">
                  {tip}
                </div>
              ))}
            </div>
          </section>

          <section id="faq">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="mt-4 divide-y border rounded-2xl">
              {[
                {
                  q: "What is a mortgage?",
                  a: "A mortgage is a loan secured by real estate. The property is collateral and can be foreclosed if payments are not made.",
                },
                {
                  q: "What affects my mortgage rate?",
                  a: "Credit score, down payment, loan term, DTI, and overall market conditions.",
                },
                {
                  q: "Fixed-rate vs ARM?",
                  a: "Fixed keeps the rate constant; ARMs adjust after the initial fixed period based on an index.",
                },
                {
                  q: "How do I get pre-approved?",
                  a: "Share income, assets, credit, and debts with a lender. They’ll estimate how much you can borrow and issue a letter.",
                },
              ].map((item) => (
                <details key={item.q} className="group p-4">
                  <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                    <span>{item.q}</span>
                    <span className="ml-4 transition group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-2 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Contact / Lead-in */}
          <section className="border rounded-2xl p-6 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-semibold">
              Talk to {SITE.name}
            </h2>
            <p className="mt-2 text-gray-700">
              Have questions about your unique scenario? Get a custom quote or a quick
              pre-approval checklist.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/about-kirill-kirk-ayzenberg"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-black hover:bg-gray-900 transition"
              >
                Start a conversation with Ayzenberg Kirill
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-gray-300 hover:bg-gray-100 transition"
              >
                {SITE.email}
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
