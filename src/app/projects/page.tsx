import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      title: "Dentist Website",
      description:
        "A responsive dentist website showcasing services, team, and contact information. Built with Next.js and Bootstrap for a modern look and feel.",
      technologies: ["Next.js", "TypeScript", "Bootstrap", "CSS3"],
      image: "/dentist_website.jpg",
      link: "",
      demo: "",
      comingSoon: true,
    },
    {
      title: "Puzzle game",
      description:
        "A fun and interactive puzzle game where users can solve various puzzles. The game features a user-friendly interface and real-time updates.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      image: "/puzzle_game.jpg",
      link: "",
      demo: "",
      comingSoon: true,
    },
    {
      title: "E-Commerce Website",
      description:
        "An e-commerce website with user authentication, product listings, and a shopping cart. Users can browse products, add them to their cart, and proceed to checkout.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image: "/e-commerce_site.jpg",
      link: "",
      demo: "",
      comingSoon: true,
    },
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard that provides insights into user behavior and application performance. It includes charts, graphs, and real-time data updates.",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      image: "/analytics_site.jpg",
      link: "",
      demo: "",
      comingSoon: true,
    },
  ];

  return (
    <>
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center">My Projects</h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              {/* <div className="card h-100 bg-light shadow-sm position-relative"> */}
              <div className="card h-100 bg-light shadow-sm position-relative overflow-hidden">
                {/* Coming Soon Overlay */}
                {project.comingSoon && (
                  <div className="coming-soon-overlay d-flex flex-column justify-content-center align-items-center text-white">
                    <span className="fs-4 fw-bold">🚧 Coming Soon</span>
                  </div>
                )}

                <Image
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  width={200}
                  height={200}
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
                      className={`btn btn-secondary ${
                        project.comingSoon ? "disabled" : ""
                      }`}
                    >
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-primary ${
                        project.comingSoon ? "disabled" : ""
                      }`}
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
