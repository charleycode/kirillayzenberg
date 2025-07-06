import Link from 'next/link';

export default function Resources() {
  const resources = [
    {
      title: "Google Sites Blog",
      description: "Kirill Ayzenberg's real estate insights and articles hosted on Google Sites, covering mortgage lending and private lending topics.",
      url: "https://sites.google.com/view/kirill-ayzenberg-real-estate/",
    },
    {
      title: "Gravatar Profile",
      description: "Professional profile for Kirill Ayzenberg on Gravatar, showcasing his brand and web presence across platforms.",
      url: "https://gravatar.com/swaga5205887cb6",
    },
    {
      title: "WordPress Blog",
      description: "Kirill Ayzenberg's mortgage and real estate blog on WordPress, featuring educational and industry articles.",
      url: "https://kirillayzenberg.wordpress.com",
    },
    {
      title: "Weebly Website",
      description: "Explore Kirill Ayzenberg's Weebly site, sharing insights and services in private lending and real estate finance.",
      url: "https://kirillayzenberg.weebly.com/",
    },
    {
      title: "Bravesites Blog",
      description: "Kirill Ayzenberg's real estate and mortgage lending content hosted on Bravesites, covering niche market strategies.",
      url: "https://kirillayzenberg.bravesites.com/",
    },
    {
      title: "Protopage",
      description: "A resource hub and profile overview for Kirill Ayzenberg on Protopage, linking to various projects and articles.",
      url: "https://www.protopage.com/kirillayzenberg",
    },
    {
      title: "Amazon S3 Website",
      description: "Kirill Ayzenberg's static website hosted on Amazon S3, featuring his business overview and contact information.",
      url: "https://s3.us-east-2.amazonaws.com/kirill-ayzenberg/index.html",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6">
          Kirill Ayzenberg’s Online Presence
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Explore <a href="https://kirillazyenberg.com">Kirill</a> Ayzenberg’s blogs, profiles, and websites to learn more about his work in private lending, mortgage solutions, and real estate!
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
