
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Webster Lima
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 font-light">
                Developer & Tech Entrepreneur
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate about innovation and impactful technology solutions. I drive data-driven decisions 
                and create smarter tech solutions that make a difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="/lovable-uploads/261d8e37-4fea-4a06-8486-79776c763d22.png"
                alt="Webster Lima"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
