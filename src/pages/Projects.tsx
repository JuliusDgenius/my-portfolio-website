import { useState } from "react";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Crypto Portfolio Tracker",
      description:
        "A web app that allows users to track cryptocurrency investments and visualize portfolio performance.",
      image: "/images/crypto-tracker.png",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://growcoinstracker.vercel.app",
    },
    {
      title: "AI Weather Chatbot",
      description:
        "An intelligent chatbot that gives weather updates and suggests movies based on mood and climate.",
      image: "/images/ai-weather-chatbot.png",
      tech: ["Flask", "OpenAI API", "Bootstrap"],
      link: "https://github.com/juliusdgenius/weather-ai-chatbot",
    },
    {
      title: "Task Manager API",
      description:
        "A backend API for managing tasks, users, and authentication built with NestJS and Prisma.",
      image: "/images/task-manager.png",
      tech: ["NestJS", "Prisma", "PostgreSQL"],
      link: "https://github.com/juliusdgenius/task-manager-api",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20 bg-white text-gray-900"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">All Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <div
              className="cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project preview"
            className="max-w-3xl w-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
