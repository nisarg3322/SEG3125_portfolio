import Navbar from "./components/navbar";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section d-flex align-items-center justify-content-center"
      >
        <div className="text-center">
          <h1 className="display-4 fw-bold">Hi, I&apos;m Nisarg Patel</h1>
          <p className="lead mt-3">
            I&apos;m a full-stack developer passionate about building modern web
            apps with React, Express, and the cloud.
          </p>
          <div className="mt-4">
            <a href="#projects" className="btn btn-primary btn-lg me-3">
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline-light btn-lg border-primary text-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-4">Get In Touch</h2>
              <p className="lead mb-5">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
              <a
                href="mailto:patelnisarg.3322@gmail.com"
                className="btn btn-primary btn-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
