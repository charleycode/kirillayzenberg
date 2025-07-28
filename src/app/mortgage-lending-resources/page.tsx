

export const metadata = {
  title: 'Mortgage Lending Resources - Kirill Ayzenberg',
  description: 'Explore a curated list of mortgage lending resources, platforms, and web profiles associated with Kirill Ayzenberg.',
};

export default function MortgageResourcesPage() {
  const resources = [
    { label: "S3 Main Site", url: "https://s3.us-east-2.amazonaws.com/kirill-ayzenberg/index.html" },
    { label: "KirillAyzenberg.com About Page", url: "https://kirillayzenberg.com/about-kirill-kirk-ayzenberg" },
    { label: "Protopage Profile", url: "https://www.protopage.com/kirillayzenberg" },
    { label: "Weebly Website", url: "https://kirillayzenberg.weebly.com/" },
    { label: "Dream.io Hosted Page", url: "https://s3.us-east-005.dream.io/kirill-ayzenberg-mortgage-lender/index.html" },
    { label: "Azure Blob About Page", url: "https://kirillayzenberg.blob.core.windows.net/kirill-ayzenberg-mortgage-lender/about.html" },
    { label: "KirkAyzenberg.com", url: "https://kirkayzenberg.com/" },
    { label: "S3 West Contact Page", url: "https://s3.us-west-1.amazonaws.com/kirill-ayzenberg-mortgage-lender/contact.html" },
    { label: "Oracle Cloud About Page", url: "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idovqmdhl4r3/b/kirill-ayzenberg-software-company/o/about.html" },
    { label: "Oracle Cloud Index Page", url: "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idovqmdhl4r3/b/kirill-ayzenberg-software-company/o/index.html" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Mortgage Lending Resources</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Explore a network of websites and profiles representing Kirill Ayzenberg’s mortgage lending expertise and digital presence.
      </p>
      <ul className="space-y-4">
        {resources.map((resource, index) => (
          <li key={index}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🔗 {resource.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
