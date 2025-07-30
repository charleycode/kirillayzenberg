

export const metadata = {
  title: 'Mortgage Lending Resources - Kirill Ayzenberg',
  description: 'Explore a curated list of mortgage lending resources, platforms, and web profiles associated with Kirill Ayzenberg.',
};

export default function MortgageResourcesPage() {
  const resources = [
    { label: "S3 Kirill ayzenberg Main Site", url: "https://s3.us-east-2.amazonaws.com/kirill-ayzenberg/index.html" },
    { label: "Protopage Profile", url: "https://www.protopage.com/kirillayzenberg" },
    { label: "Weebly Website", url: "https://kirillayzenberg.weebly.com/" },
    { label: "KirkAyzenberg.com", url: "https://kirkayzenberg.com/" },
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
