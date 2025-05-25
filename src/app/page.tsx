import Navbar from "./components/navbar";
import About from "./about/page";
import Projects from "./projects/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section d-flex flex-column justify-content-between align-items-center min-vh-100"
      >
        {/* Centered Text Content */}
        <div className="text-center mt-auto mb-auto">
          <h1 className="display-4 fw-bold">Hi, I&apos;m Nisarg Patel</h1>
          <p className="lead mt-3">
            I&apos;m a full-stack developer passionate about building modern web
            apps with React, Express, and the cloud.
          </p>
          <div className="mt-4">
            <a
              href="#projects"
              className="btn btn-primary border-none btn-lg me-3"
            >
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg">
              Contact Me
            </a>
          </div>
        </div>

        {/* Down Arrow at Bottom */}
        <div className="mb-4 ">
          <a href="#about">
            <Image
              src="/down_arrow.gif"
              width={50}
              height={50}
              alt="Scroll Down"
            />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-1">
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
