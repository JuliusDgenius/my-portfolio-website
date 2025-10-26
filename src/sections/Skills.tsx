import { 
  SiJavascript, SiPython, SiNodedotjs, SiGithub, 
  SiDocker, SiTypescript, SiReact, SiRedis,
  SiFlask, SiNestjs, SiMongodb, SiPostgresql
} from "react-icons/si";
export default function Skills() {
    const skills = [
      { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> },
      { name: "TypeScript", level: "Intermediate", icon: <SiTypescript /> },
      { name: "React", level: "Intermediate", icon: <SiReact /> },
      { name: "Node.js", level: "Advanced", icon: <SiNodedotjs /> },
      { name: "NestJS", level: "Intermediate", icon: <SiNestjs /> },
      { name: "Python", level: "Advanced", icon: <SiPython /> },
      { name: "Flask", level: "Intermediate", icon: <SiFlask /> },
      { name: "MongoDB", level: "Intermediate", icon: <SiMongodb /> },
      { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql /> },
      { name: "Redis", level: "Intermediate", icon: <SiRedis /> },
      { name: "Docker", level: "Intermediate", icon: <SiDocker /> },
      { name: "Git & GitHub", level: "Advanced", icon: <SiGithub /> },
    ];
  
    return (
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20 bg-[#0d1117] text-gray-100"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Technologies
          </h1>
          <p className="text-gray-400 max-w-2xl">
            A snapshot of the tools and technologies I use to build scalable
            backend systems and intuitive user interfaces.
          </p>
        </div>
  
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-[#161b22] hover:bg-[#1f242d] border border-gray-800 hover:border-indigo-500 transition-all duration-300 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-md"
            >
              <div className="text-3xl mb-2 text-indigo-400">{skill.icon}</div>
              <span className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400">
                {skill.name}
              </span>
              <span className="text-sm text-gray-400">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  