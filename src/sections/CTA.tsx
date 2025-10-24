export default function CTA() {
    return (
      <section
        id="cta"
        className="min-h-[70vh] flex flex-col justify-center items-center px-6 md:px-16 py-20 bg-[#0d1117] text-gray-100"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Build Something Great Together 🚀
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10">
            Have a project in mind or want to collaborate?  
            I’m always open to new opportunities and challenges.  
            Let’s connect and turn ideas into impactful products.
          </p>
  
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-md transition-all"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="border border-gray-500 hover:border-indigo-400 text-gray-300 px-8 py-4 rounded-xl text-lg font-medium transition-all"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    );
  }
  