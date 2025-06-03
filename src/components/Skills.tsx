
const Skills = () => {
  const skills = [
    {
      title: "Full-Stack JavaScript",
      description: "Node.js, React, React Native development",
      icon: "🚀"
    },
    {
      title: "Backend & Automation",
      description: "Python development and automation solutions",
      icon: "⚙️"
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS, CloudFormation, Pulumi expertise",
      icon: "☁️"
    },
    {
      title: "Project Management",
      description: "Agile methodologies and team leadership",
      icon: "📊"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining technical excellence with strategic thinking to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
