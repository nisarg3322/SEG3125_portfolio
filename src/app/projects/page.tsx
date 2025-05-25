export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website showcasing my projects and skills. Built with Next.js and TypeScript, featuring smooth animations and a clean design.",
      technologies: ["Next.js", "TypeScript", "Bootstrap", "CSS3"],
      image: "/portfolio-preview.jpg",
      link: "https://github.com/nisargpatel/portfolio",
      demo: "https://nisargpatel.dev",
    },
    {
      title: "Course Management System",
      description:
        "A full-stack application for managing university courses, assignments, and student progress. Includes features like grade tracking and course material distribution.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      image: "/cms-preview.jpg",
      link: "https://github.com/nisargpatel/course-management",
      demo: "https://cms-demo.nisargpatel.dev",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team features, and deadline tracking. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image: "/taskmanager-preview.jpg",
      link: "https://github.com/nisargpatel/task-manager",
      demo: "https://taskmanager.nisargpatel.dev",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A feature-rich e-commerce platform with user authentication, product management, shopping cart, and secure payment integration using Stripe.",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      image: "/ecommerce-preview.jpg",
      link: "https://github.com/nisargpatel/ecommerce",
      demo: "https://shop.nisargpatel.dev",
    },
  ];

  return (
    <>
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center">My Projects</h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 bg-light shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h3 className="h4 card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="badge bg-primary me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
