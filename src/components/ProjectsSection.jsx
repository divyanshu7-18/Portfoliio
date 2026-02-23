import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Indian Sign Language Recognition",
    description:
    "CNN-based deep learning model to recognize Indian Sign Language gestures using TensorFlow and OpenCV with real-time hand detection and gesture classification.",
    image: "isl.png",
    tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/divyanshu7-18",
  },
  {
    id: 2,
    title: "Gym Membership Portal (GymSick)",
    description:
    "Full-stack gym management system with authentication, real-time database integration, and responsive dashboards built using React, Firebase, and Vite.",
    image: "/projects/gym.png",
    tags: ["React", "Firebase", "Vite", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/divyanshu7-18",
  },
  {
    id: 0,
    title: "Personal Portfolio Website",
    description:
      "Modern animated developer portfolio built with React and Tailwind CSS. Features smooth animations, dynamic theming, responsive layouts, and interactive UI components.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    demoUrl: "#", // Replace with deployed link
    githubUrl: "https://github.com/divyanshu7-18",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          A selection of projects showcasing my work in web development,
          machine learning, and real-world problem solving.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card/80 backdrop-blur-md border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/divyanshu7-18"
          >
            Visit My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};