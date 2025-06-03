
const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web and mobile application development using modern technologies",
      features: ["React & React Native", "Node.js Backend", "Database Design", "API Development"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions using AWS and modern DevOps practices",
      features: ["AWS Architecture", "CloudFormation", "Pulumi", "CI/CD Pipelines"]
    },
    {
      title: "Tech Consulting",
      description: "Strategic technology guidance for startups and established businesses",
      features: ["Architecture Review", "Tech Strategy", "Team Leadership", "Project Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology services covering end-to-end project delivery and innovative solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
