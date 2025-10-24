import { projects } from "../utils/projectData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20"
    >
      <h2 className="text-3xl font-bold mb-4 text-[var(--accent)]">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl w-full">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--bg-card)] rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Image Preview */}
              {project.images && project.images.length > 0 && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--accent)]">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[var(--accent)] underline hover:text-[var(--accent-hover)]"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects available yet.</p>
        )}
      </div>
    </section>
  );
}
