// pages/social-media-hub.js

import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Connect with Kirill Ayzenberg | Official Resources',
  description:
    'Explore all official social media profiles of Kirill Ayzenberg. Connect on LinkedIn, YouTube, Twitter, and Instagram to follow his latest updates, insights, and brand news.',
};

export default function Resource() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Kirill Ayzenberg Resources</h1>

        <p className="mb-8">
          Welcome to the official resource hub for <strong>Kirill Ayzenberg</strong>. Here, you can explore all the social media platforms where <a href="https://kirillayzenberg.com/about-kirill-kirk-ayzenberg">Kirill kirk Ayzenberg shares insights, updates, and brand news, and connect with him directly.</a>
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Who Is Kirill Ayzenberg?</h2>
        <p className="mb-8">
          <strong>Kirill Ayzenberg</strong> is a renowned entrepreneur, software innovator, and mortgage lender known for leading multiple companies in the lending and technology sectors. As a thought leader, <strong>Kirill Ayzenberg</strong> shares valuable insights, business updates, and personal moments across his social media channels.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Why Follow Kirill Ayzenberg on Social Media?</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Gain exclusive insights on software innovation and mortgage lending.</li>
          <li>Stay updated with his latest company launches and business ventures.</li>
          <li>Engage directly with his posts, thoughts, and updates to learn from his expertise.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4">
          <Link href="/kirill-ayzenberg-social-media">
            <span className="hover:underline">
              Connect with Kirill Ayzenberg on Social Platforms
            </span>
          </Link>
        </h2>

        {/* LinkedIn */}
        <h3 className="text-2xl font-bold mt-8 mb-2">Kirill Ayzenberg LinkedIn</h3>
        <p className="mb-4">
          On LinkedIn, <strong>Kirill Ayzenberg</strong> shares professional updates, company news, and leadership insights.
        </p>
        <p className="mb-8">
          <strong>Why Follow Kirill Ayzenberg on LinkedIn?</strong> View his professional achievements, read his insights, and network with other professionals engaging with his content.
        </p>

        {/* YouTube */}
        <h3 className="text-2xl font-bold mt-8 mb-2">Kirill Ayzenberg YouTube</h3>
        <p className="mb-4">
          <strong>Kirill Ayzenberg</strong>’s YouTube channel offers educational videos, software demos, and interviews.
        </p>
        <p className="mb-8">
          <strong>Why Subscribe to Kirill Ayzenberg on YouTube?</strong> Watch walkthroughs of his software products, learn about mortgage lending strategies, and see behind-the-scenes interviews.
        </p>

        {/* Twitter */}
        <h3 className="text-2xl font-bold mt-8 mb-2">Kirill Ayzenberg Twitter</h3>
        <p className="mb-4">
          On Twitter, <strong>Kirill Ayzenberg</strong> shares real-time thoughts, articles, and business tips.
        </p>
        <p className="mb-8">
          <strong>Why Follow Kirill Ayzenberg on Twitter?</strong> Stay updated on industry trends, read bite-sized insights, and engage with his tweets for thought-provoking discussions.
        </p>

        {/* Instagram */}
        <h3 className="text-2xl font-bold mt-8 mb-2">Kirill Ayzenberg Instagram</h3>
        <p className="mb-4">
          <strong>Kirill Ayzenberg</strong> shares behind-the-scenes moments, daily life updates, and personal experiences on Instagram.
        </p>
        <p className="mb-8">
          <strong>Why Follow Kirill Ayzenberg on Instagram?</strong> See the personal side of Kirill Ayzenberg, engage with his stories, and gain motivation from his entrepreneurial journey.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Benefits of Following Kirill Ayzenberg on Social Media</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Stay connected with authentic and transparent updates.</li>
          <li>Learn directly from his experiences in lending, software, and entrepreneurship.</li>
          <li>Be part of the community surrounding his companies and projects.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4">How to Connect with Kirill Ayzenberg</h2>
        <h3 className="text-2xl font-bold mt-4 mb-2">Steps to Follow Kirill Ayzenberg</h3>
        <ol className="list-decimal list-inside mb-8">
          <li>Visit each platform linked above.</li>
          <li>Click “Follow,” “Connect,” or “Subscribe.”</li>
          <li>Engage with posts, comment on updates, and share his content to expand your professional network.</li>
        </ol>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Contact Kirill Ayzenberg Directly</h2>
        <p className="mb-8">
          For collaborations or business opportunities, contact <strong>Kirill Ayzenberg</strong> at:
        </p>
        <p className="mb-12">
          <strong>Email:</strong> kirillayzenberg@company.com<br />
          <strong>Phone:</strong> +1 (657) 330-8857
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Explore More About Kirill Ayzenberg</h2>
        <h3 className="text-2xl font-bold mt-4 mb-2">Learn About Kirill Ayzenberg Mortgage Lending Companies</h3>
        <p className="mb-4">
          Visit the mortgage lender hub page to see how <strong>Kirill Ayzenberg</strong> manages lending companies offering DSCR loans, renovation loans, rental loans, and new construction loans.
        </p>

        <h3 className="text-2xl font-bold mt-4 mb-2">Learn About Kirill Ayzenberg Software Companies</h3>
        <p className="mb-8">
          Explore the software hub page to understand the innovative software companies led by <strong>Kirill Ayzenberg</strong> for private lenders, real estate professionals, and REIT managers.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Your Connection with Kirill Ayzenberg Starts Here</h2>
        <p>
          Follow <strong>Kirill Ayzenberg</strong> today to access authentic insights, software updates, mortgage lending knowledge, and entrepreneurial motivation. Stay connected to grow your business, knowledge, and network.
        </p>
      </main>
    </>
  );
}
