const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driven by innovation and a results-oriented mindset, I create
            technology solutions that matter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Background</h3>
            <p className="text-gray-600 leading-relaxed">
              As a passionate developer and tech entrepreneur, I specialize in
              creating innovative solutions that drive meaningful impact. My
              approach combines technical expertise with strategic thinking to
              deliver results that exceed expectations.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">
                  Bachelor's degree in Computer Science from UNESP
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Philosophy</h4>
                <p className="text-gray-600">
                  I believe in the power of data-driven decisions and smarter
                  technology to solve complex problems and create lasting value.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Experience</h3>
            <div className="space-y-4">
              {[
                {
                  role: "Tech Lead & Project Manager",
                  company: "CI&T",
                  location: "Campinas, Brazil",
                },
                {
                  role: "Tech Lead & Project Manager",
                  company: "Globo",
                  location: "Rio de Janeiro, Brazil",
                },
                {
                  role: "Staff Engineer",
                  company: "Ambipar",
                  location: "São Paulo, Brazil (Remote)",
                },
                {
                  role: "DevOps Engineer",
                  company: "Locke Bio",
                  location: "Toronto, Canada (Remote)",
                },
                {
                  role: "Fullstack Developer",
                  company: "Bloom",
                  location: "NYC, United States (Remote)",
                },
                {
                  role: "Solo Projects",
                  company:
                    "Mastercard, Which, Nutreasy, Motion Lab, CirculApp, Rentbud, Naveg.me...",
                },
              ].map((exp, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">{exp.role}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-purple-600">{exp.company}</p>
                    <p className="text-gray-600 italic font-thin">
                      {exp.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
