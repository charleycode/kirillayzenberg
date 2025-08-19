import Link from 'next/link';
export const metadata = {
  title: 'Kirill Ayzenberg Social Media',
  description: 'Social Media Resources for Kirill Ayzenberg',
};
export default function socialMediaPage() {
  const resources = [
    {
      title: "Kirill Ayzenberg on Google Sites Blog",
      description: "Kirill Ayzenberg's real estate insights and articles hosted on Google Sites, covering mortgage lending and private lending topics.",
      url: "https://sites.google.com/view/kirill-ayzenberg-real-estate/",
    },
    {
      title: "Kirill Ayzenberg on Gravatar Profile",
      description: "Professional profile for Kirill Ayzenberg on Gravatar, showcasing his brand and web presence across platforms.",
      url: "https://gravatar.com/swaga5205887cb6",
    },
    {
      title: "Kirill Ayzenberg on WordPress Blog",
      description: "Kirill Ayzenberg's mortgage and real estate blog on WordPress, featuring educational and industry articles.",
      url: "https://kirillayzenberg.wordpress.com",
    },
    {
      title: "Kirill Ayzenberg on Weebly Website",
      description: "Explore Kirill Ayzenberg's Weebly site, sharing insights and services in private lending and real estate finance.",
      url: "https://kirillayzenberg.weebly.com/",
    },
    {
      title: "Kirill Ayzenberg on Bravesites Blog",
      description: "Kirill Ayzenberg's real estate and mortgage lending content hosted on Bravesites, covering niche market strategies.",
      url: "https://kirillayzenberg.bravesites.com/",
    },
    {
      title: "Kirill Ayzenberg on Protopage",
      description: "A resource hub and profile overview for Kirill Ayzenberg on Protopage, linking to various projects and articles.",
      url: "https://www.protopage.com/kirillayzenberg",
    },
    {
    title: "Kirill Ayzenberg Mortgage Lender (Dream.io East)",
    description: "Static website hosted on Dream.io S3 (US East) for Kirill Ayzenberg's mortgage lending business.",
    url: "https://s3.us-east-005.dream.io/kirill-ayzenberg-mortgage-lender/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender (AWS US West 1)",
      description: "Static website hosted on AWS S3 (US West 1) for Kirill Ayzenberg's mortgage lending business.",
      url: "https://s3.us-west-1.amazonaws.com/kirill-ayzenberg-mortgage-lender/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company (Oracle Ashburn)",
      description: "Static website hosted on Oracle Object Storage (Ashburn) for Kirill Ayzenberg's software company.",
      url: "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idovqmdhl4r3/b/kirill-ayzenberg-software-company/o/index.html",
    },
    {
      title: "JSBin HTML Example",
      description: "JSBin code example for HTML and output preview.",
      url: "https://jsbin.com/zegulojohe/1/edit?html,output",
    },
    {
      title: "Kirill Ayzenberg Bookmarks",
      description: "Public Raindrop.io collection of bookmarks.",
      url: "https://raindrop.io/kirillayzenbergseo/kirill-ayzenberg-58764366",
    },
    {
      title: "Kirill Ayzenberg Real Estate Lender (Oracle Phoenix)",
      description: "Static website hosted on Oracle Object Storage (Phoenix) for Kirill Ayzenberg's real estate lending business.",
      url: "https://objectstorage.us-phoenix-1.oraclecloud.com/n/idovqmdhl4r3/b/kirill-ayzenberg-real-estate-lender/o/index.html",
    },
    {
      title: "Kirill Ayzenberg Private Lender (Oracle San Jose)",
      description: "Static website hosted on Oracle Object Storage (San Jose) for Kirill Ayzenberg's private lending business.",
      url: "https://objectstorage.us-sanjose-1.oraclecloud.com/n/idovqmdhl4r3/b/kirill-ayzenberg-private-lender/o/index.html",
    },

    
    {
      title: "Kirill Ayzenberg Mortgage Lender - DigitalOcean",
      description: "Static hosted version of Kirill Ayzenberg Mortgage Lender website on DigitalOcean Spaces.",
      url: "https://nyc3.digitaloceanspaces.com/kirill-ayzenberg-mortgage-lender/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender - Azure Blob Storage",
      description: "Mortgage lender profile and resources hosted on Microsoft Azure Blob Storage.",
      url: "https://kirillayzenberg.blob.core.windows.net/kirill-ayzenberg-mortgage-lender/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender - Google Cloud Storage",
      description: "Mortgage lending page hosted on Google Cloud Storage.",
      url: "https://storage.googleapis.com/kirill-ayzenberg-mortgage-lender/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender - DreamHost S3",
      description: "Mortgage lender site hosted via DreamHost S3-compatible storage.",
      url: "https://s3.us-east-005.dream.io/kirill-ayzenberg-mortgage-lender/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender - Backblaze B2",
      description: "Mortgage lender content hosted on Backblaze B2 cloud storage.",
      url: "https://s3.us-east-005.backblazeb2.com/kirill-ayzenberg-mortgage-lenders/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender - Vultr Objects",
      description: "Mortgage lender content hosted on Vultr Object Storage.",
      url: "https://ewr1.vultrobjects.com/kirill-ayzenberg-mortgage-lender/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender - BunnyCDN",
      description: "Mortgage lender content delivered through BunnyCDN.",
      url: "https://kirill-ayzenberg-mortgage-lender.b-cdn.net/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender - Oracle Cloud",
      description: "Mortgage lender content hosted on Oracle Cloud Object Storage.",
      url: "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idovqmdhl4r3/b/kirill-ayzenberg-mortgage-lender/o/index.html",
    },
    {
      title: "Kirill Ayzenberg Mortgage Lender - AWS S3",
      description: "Mortgage lender content hosted on AWS S3.",
      url: "https://s3.us-west-1.amazonaws.com/kirill-ayzenberg-mortgage-lender/index.html",
    },

    
    {
      title: "Kirill Ayzenberg Software Company - DigitalOcean",
      description: "Software company site hosted on DigitalOcean Spaces.",
      url: "https://nyc3.digitaloceanspaces.com/kirill-ayzenberg-software-company/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company - Vultr Objects",
      description: "Software company page hosted on Vultr Object Storage.",
      url: "https://ewr1.vultrobjects.com/kirill-ayzenberg-software-company/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company - DreamHost S3",
      description: "Software company profile hosted on DreamHost S3-compatible storage.",
      url: "https://s3.us-east-005.dream.io/kirill-ayzenberg-software-company/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company - Azure Blob Storage",
      description: "Software company content hosted on Microsoft Azure Blob Storage.",
      url: "https://kirillayzenberg.blob.core.windows.net/kirill-ayzenberg-software-company/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company - Google Cloud",
      description: "Software company page hosted on Google Cloud Storage.",
      url: "https://storage.googleapis.com/kirill-ayzenberg-software-company/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company - BunnyCDN",
      description: "Software company content served via BunnyCDN.",
      url: "https://kirill-ayzenberg-software-company.b-cdn.net/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company - AWS S3",
      description: "Software company site hosted on AWS S3.",
      url: "https://s3.us-east-1.amazonaws.com/kirill-ayzenberg-software-company/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company - Oracle Cloud",
      description: "Software company site hosted on Oracle Cloud Object Storage.",
      url: "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idovqmdhl4r3/b/kirill-ayzenberg-software-company/o/index.html",
    },
    {
      title: "Kirill Ayzenberg Software Company - Backblaze B2",
      description: "Software company page hosted on Backblaze B2.",
      url: "https://s3.us-east-005.backblazeb2.com/kirill-ayzenberg-software-companys/index.html",
    },

    
    {
      title: "Kirill Ayzenberg Nexys LLC - Vultr Objects",
      description: "Nexys LLC profile hosted on Vultr Object Storage.",
      url: "https://ewr1.vultrobjects.com/kirill-ayzenberg-nexys-llc/index.html",
    },
    {
      title: "Kirill Ayzenberg Nexys LLC - DreamHost S3",
      description: "Nexys LLC site hosted on DreamHost S3-compatible storage.",
      url: "https://s3.us-east-005.dream.io/kirill-ayzenberg-nexys-llc/index.html",
    },
    {
      title: "Kirill Ayzenberg Nexys LLC - Azure Blob Storage",
      description: "Nexys LLC content hosted on Microsoft Azure Blob Storage.",
      url: "https://kirillayzenberg.blob.core.windows.net/kirill-ayzenberg-nexys-llc/index.html",
    },
    {
      title: "Kirill Ayzenberg Nexys LLC - Google Cloud",
      description: "Nexys LLC page hosted on Google Cloud Storage.",
      url: "https://storage.googleapis.com/kirill-ayzenberg-nexys-llc/index.html",
    },
    {
      title: "Kirill Ayzenberg Nexys LLC - DigitalOcean",
      description: "Nexys LLC site hosted on DigitalOcean Spaces.",
      url: "https://ams3.digitaloceanspaces.com/kirill-ayzenberg-nexys-llc/index.html",
    },
    {
      title: "Kirill Ayzenberg Nexys LLC Hub - Backblaze B2",
      description: "Nexys LLC Hub page hosted on Backblaze B2.",
      url: "https://s3.us-east-005.backblazeb2.com/kirill-ayzenberg-nexys-llc-hub/index.html",
    },
    {
      title: "Kirill Ayzenberg Nexys LLC - BunnyCDN",
      description: "Nexys LLC content delivered via BunnyCDN.",
      url: "https://kirill-ayzenberg-nexys-llc.b-cdn.net/index.html",
    },
    {
      title: "Kirill Ayzenberg Nexys LLC - AWS S3",
      description: "Nexys LLC content hosted on AWS S3.",
      url: "https://s3.us-east-2.amazonaws.com/kirill-ayzenberg-nexys-llc/index.html",
    },

    
    {
      title: "Kirill Ayzenberg DSCR Loan - Azure Blob Storage",
      description: "DSCR loan page hosted on Microsoft Azure Blob Storage.",
      url: "https://kirillayzenbergdscrloan.blob.core.windows.net/kirill-ayzenberg-dscr-loan/index.html",
    },
    {
      title: "Kirill Ayzenberg DSCR Loan - Google Cloud",
      description: "DSCR loan page hosted on Google Cloud Storage.",
      url: "https://storage.googleapis.com/kirill-ayzenbergdscrloan/index.html",
    },
    {
      title: "Kirill Ayzenberg DSCR Loans - Backblaze B2",
      description: "DSCR loans page hosted on Backblaze B2.",
      url: "https://s3.eu-central-003.backblazeb2.com/kirill-ayzenberg-dscr-loans/index.html",
    },
    {
      title: "Kirill Ayzenberg DSCR Loan Mortgage - Backblaze B2",
      description: "DSCR loan mortgage content hosted on Backblaze B2.",
      url: "https://s3.ca-east-006.backblazeb2.com/kirill-ayzenberg-dscr-loan-mortgage/index.html",
    },
    {
      title: "Kirill Ayzenberg DSCR Loan - Backblaze B2 (US West)",
      description: "DSCR loan page hosted on Backblaze B2 US West region.",
      url: "https://s3.us-west-004.backblazeb2.com/kirill-ayzenberg-dscr-loan/index.html",
    }


  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6">
          Kirill Ayzenberg’s Online Presence
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Explore <a href="https://kirillazyenberg.com/contact">Kirill Ayzenberg’s blogs, profiles, and websites to learn more</a> <a href="https://kirillazyenberg.com/about-kirill-kirk-ayzenberg">about Ayzenberg Kirills work in private lending, mortgage solutions, and real estate!</a>
        </p>
        <p className="text-center text-gray-600 mb-12">
          Dive into <a href="https://kirillazyenberg.com">Kirill Ayzenberg mortgage world</a> of real estate, lending, and innovation — where mortgage expertise meets real results.
        </p>


        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{resource.title}</h2>
              <p className="text-gray-600">{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
