import { useEffect, useState } from "react";
import { projects } from "../utils/projectData";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images, index: number) => {
    setActiveImages(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImages([]);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === activeImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup when modal closes
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeImages]);


  return (
    <section
      id="projects"
      className="bg-black min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20"
    >
      <h2 className="text-3xl font-bold mb-4 text-[var(--accent)]">Projects</h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl w-full">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--bg-card)] rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Image Preview */}
              {project.images && project.images.length > 0 && (
                <div
                  className="h-48 overflow-hidden cursor-pointer"
                  onClick={() => openModal(project.images, 0)}
                >
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
                  View Live Project →
                </a>
                <span className="p-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[var(--accent)] underline hover:text-[var(--accent-hover)]"
                  >
                    Github →
                  </a>
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects available yet.</p>
        )}
      </div>

      {/* Modal Viewer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>

          <div
            className="flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImages[currentIndex]}
              alt="project screenshot"
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
            />

            <div className="flex justify-between w-full mt-6 px-10">
              <button
                onClick={prevImage}
                className="text-white text-2xl px-4 py-2 rounded hover:bg-white/10"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="text-white text-2xl px-4 py-2 rounded hover:bg-white/10"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
