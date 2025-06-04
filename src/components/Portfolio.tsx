const Portfolio = () => {
  const projects = [
    {
      title: "Priceless Booking Platform",
      description:
        "A streamlined reservation system for Mastercard's benefits program, enhancing user experience and engagement.",
      link: "https://booking-priceless.com.br/",
      tech: ["Angular", "Node.js", "Google Cloud", "Stripe"],
    },
    {
      title: "Which Social Network",
      description:
        "A social platform designed for meaningful user connections and community-building with innovative features.",
      link: "https://www.joinwhich.com/",
      tech: ["React Native", "GraphQL", "Real-time", "Community Features"],
    },
    {
      title: "Nutreasy",
      description:
        "Nutritionist app that helps users with their nutrition and health goals.",
      link: "https://nutreasy.com.br/",
      tech: ["Angular", "C#", "Google Cloud", "React Native", "Stripe"],
    },
    {
      title: "Motion Lab",
      description:
        "A mobile app that helps users with their workout and strength training.",
      link: "https://apps.apple.com/us/app/motion-lab/id6450864490",
      tech: ["React Native", "Firebase", "Firestore", "Cloud Functions"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of notable projects demonstrating innovation and
            technical excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
