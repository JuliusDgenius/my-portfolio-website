export default function Hero() {
    return (
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--accent)] mb-6">
          Hi, I'm Julius 👋
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-400">
          Frontend Developer | React & Tailwind Enthusiast
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
        >
          View My Work
        </a>
      </section>
    )
  }
  