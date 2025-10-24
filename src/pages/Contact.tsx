export default function Contact() {
    return (
      <section id="contact">
        <h2 className="text-3xl font-bold mb-4 text-[var(--accent)]">Contact</h2>
        <p className="text-gray-400 mb-4">
          I’d love to connect! Send me a message below.
        </p>
        <form className="flex flex-col gap-4 max-w-md w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-[var(--bg-card)] border border-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-[var(--bg-card)] border border-gray-700"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded bg-[var(--bg-card)] border border-gray-700"
          />
          <button
            type="submit"
            className="bg-[var(--accent)] text-[var(--bg-dark)] py-3 rounded font-semibold hover:opacity-90 transition-all"
          >
            Send Message
          </button>
        </form>
      </section>
    )
  }
  