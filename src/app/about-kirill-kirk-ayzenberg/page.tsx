import Head from 'next/head';

export const metadata = {
    title: 'Kirk Ayzenberg? Kirill Ayzenberg? Who Is Kirk Ayzenberg? - Kirill Ayzenberg LLC',
    description: 'Discover how Kirill Ayzenberg ( Kirk Ayzenberg ) is helping families, first-time buyers, and investors secure smarter mortgage solutions with personalized lending services and expert guidance.',
  };
  
  
  export default function AboutKirkAyzenbergPage() {
    return (
      <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://kirillayzenberg.com/about-kirill-kirk-ayzenberg" />
      </Head>
        {/* Hero Section */}
        <section className="bg-[url('/Kirill-Ayzenberg-Hero-background-kirill-ayzenberg-llc.jpg')] bg-cover bg-center text-white">
          <div className="w-full px-4 mx-auto max-w-screen-xl py-16">
            <div className="flex flex-col md:flex-row items-center gap-8 border-y-2">
              <div className="w-1/2">
                <a href="https://kirillayzenberg.com"><h1 className="lg:text-6xl px-6">About Kirill Kirk Ayzenberg? Who Is Kirill Kirk Ayzenberg?</h1></a>
                <p className="text-xl px-6 mt-4">
                    Who is Kirk Ayzenberg?
                    Kirill Ayzenberg (also known professionally as Kirk Ayzenberg) is the driving force behind Kirill Ayzenberg LLC, 
                    a trusted mortgage lender dedicated to guiding clients through life’s most important financial decisions. 
                    Based in California, Kirill combines deep expertise in private and wholesale lending with tech-forward strategies that streamline the 
                    loan process for homebuyers, investors, and businesses.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-6 mt-8 md:mt-0">
                <img
                  src="/Kirill-Ayzenberg-Logo-Kirill-ayzenberg-Blue-Kirill-Ayzenberg-LLC.png"
                  alt="Kirill Ayzenberg Logo - AKA Kirk Ayzenberg - Kirill Ayzenberg LLC"
                  width={1200}
                  height={400}
                  className="w-full h-auto object-contain p-6"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Other Section */}
              {/* About & Experience Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who is Kirill Ayzenberg?</h2>
          <p>
            Kirill Ayzenberg (also known professionally as Kirk Ayzenberg) is the driving force behind <strong>Kirill Ayzenberg LLC</strong>, a trusted mortgage lender dedicated to guiding clients through life’s most important financial decisions. Based in California, Kirill combines deep expertise in private and wholesale lending with tech-forward strategies that streamline the loan process for homebuyers, investors, and businesses.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Experience & Leadership</h3>
          <ul className="list-disc ml-4 space-y-2">
            <li><strong>CEO & Founder, Kirill Ayzenberg LLC</strong> – Personalized lending and refinancing solutions.</li>
            <li><strong>Co‑Founder, Finresi</strong> – High-yield real estate loans via digital platforms.</li>
            <li><strong>President & CEO, Nextres, LLC</strong> – AI and blockchain-powered wholesale lending (2015–2022).</li>
          </ul>
        </div>
      </section>

      {/* Mission + What We Offer */}
      <section className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

    <div className="flex flex-col justify-between bg-white rounded-md p-6 shadow">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <ol className="list-decimal ml-4 space-y-2">
          <li>Empower you with clear, honest mortgage guidance.</li>
          <li>Leverage technology to reduce paperwork and speed approvals.</li>
          <li>Tailor each loan to your unique goals.</li>
        </ol>
      </div>

      <div className="mt-8">
        <a
          href="/mortgage-lender"
          className="inline-block w-1/2 text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Mortgage Lender Space
        </a>
      </div>
    </div>

    <div className="flex flex-col justify-between bg-white rounded-md p-6 shadow">
      <div>
        <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc ml-4 space-y-2">
          <li>Home Purchase Loans – First-time &amp; move-up mortgages</li>
          <li>Refinancing – Lower rates, cash-out, equity access</li>
          <li>Private &amp; Bridge Financing – Fast funding for investors</li>
          <li>Digital Loan Process – Easy documents &amp; approvals</li>
        </ul>
      </div>

      <div className="mt-8">
        <a
          href="/software-company"
          className="inline-block w-1/2 text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
        >
          Software Company Hub
        </a>
      </div>
    </div>

  </div>
</section>



      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">🏆 Experience</h3>
            <p>Hundreds of successful closings backed by deep expertise.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">💡 Innovation</h3>
            <p>AI & blockchain-powered tools for secure, fast lending.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">⚡ Speed</h3>
            <p>Fast approvals with responsive communication.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">🤝 Trust</h3>
            <p>Client-centered service built on transparency.</p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Innovation Meets Expertise</h2>
          <p className="max-w-2xl mx-auto">
            Finresi brings institutional-grade real estate loans to individuals, while Nextres develops AI- and blockchain-powered tools to simplify lending, ensuring compliance and security.
          </p>
        </div>
      </section>

      {/* Contact CTA Box */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start?</h2>
        <p className="mb-8">Contact Kirill Ayzenberg LLC to begin your mortgage journey today.</p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
        <p className="mt-4 text-sm text-gray-500">📞 +1 (858) 299-5570 | 🗓️ Mon–Fri, 9am–5pm PST</p>
      </section>
  


          {/* Other Section */}
          <section className="text-black py-16 px-4 hidden">
          <div className="w-full mx-auto max-w-screen-xl flex flex-col gap-8">
            <h2>Welcome to the Lending Hub of Kirill Ayzenberg</h2>
            Kirill Ayzenberg isn&apos;t just a mortgage lender—he&apos;s a reliable partner in one of the most critical financial decisions of your life. His homepage serves as both a resource and a reflection of his commitment to transparency, strategy, and service.
  
            <h2>Meet Kirill Ayzenberg: Mortgage Expertise Backed by Results</h2>
            With years of experience in residential and commercial lending, Kirill b rings an analytical mindset and unmatched dedication to helping clients navigate the complex lending landscape. His track record spans hundreds of successful closings and client success stories.
  
            <h2>Kirill Ayzenberg&apos;s Mortgage Solutions Tailored for You</h2>
            Whether you&apos;re a first-time homebuyer, a real estate investor, or looking to refinance, Kirill crafts financing strategies that align with your goals. His services include pre-approvals, home purchase loans, refinancing, and rate shopping guidance.
  
            <h2>Why Clients Trust Kirill Ayzenberg (Kirk Ayzenberg)</h2>
            - Fast approvals and personalized consultation
            - Clear communication from start to finish
            - Deep knowledge of underwriting and loan structuring
            - A genuine commitment to long-term client success
  
            <h2>Tech-Enabled Lending with a Personal Touch</h2>
            Leveraging modern digital tools for faster pre-approvals and document management, Kirill blends automation with human insight. His approach minimizes stress and accelerates decisions without sacrificing due diligence.
  
            <h2>Kirill Ayzenbergs - Client Testimonials</h2>
            “Kirill made the entire mortgage process smooth and stress-free. His knowledge and responsiveness were second to none.” – J. Morgan, NY
  
            <h2>Resources You’ll Find on This Site</h2>
            - Loan calculators and rate tools  
            - FAQs on mortgage types and terms  
            - Real-time updates on interest rates  
            - Blog articles on homeownership and investment strategies  
  
            <h2>Start Your Home Loan Journey with Confidence</h2>
            Every mortgage tells a story. Let yours begin with clarity, care, and Kirill Ayzenberg guiding you every step of the way.
  
  
          </div>
        </section>
  
  
        
      </div>
    );
  }
  