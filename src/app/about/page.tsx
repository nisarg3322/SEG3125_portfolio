import "./terminal.module.css";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0D1117] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="terminal">
            <div className="terminalHeader">
              <div className="terminalButtons">
                <div className="terminalButton closeButton" />
                <div className="terminalButton minimizeButton" />
                <div className="terminalButton maximizeButton" />
              </div>
              <div className="terminalTitle">About Me</div>
            </div>
            <div className="terminalContent">
              <div className="command">$ whoami</div>
              <div className="comment">
                {
                  "// Full Stack Developer with a passion for creating elegant solutions"
                }
              </div>

              <div className="card">
                <div className="command">$ skills</div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">
                    Frontend: React, Next.js, TypeScript, Tailwind CSS
                  </span>
                </div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">
                    Backend: Node.js, Express, Python, Django
                  </span>
                </div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">
                    Database: MongoDB, PostgreSQL, MySQL
                  </span>
                </div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">DevOps: Docker, AWS, CI/CD</span>
                </div>
              </div>

              <div className="card">
                <div className="command">$ education</div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">
                    Bachelor of Science in Computer Science
                  </span>
                  <span className="textMuted"> (2019 - 2023)</span>
                </div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">University of Ottawa</span>
                </div>
              </div>

              <div className="card">
                <div className="command">$ interests</div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">Open Source Contribution</span>
                </div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">Machine Learning</span>
                </div>
                <div className="listItem">
                  <span className="arrow">→</span>
                  <span className="text">Cloud Architecture</span>
                </div>
              </div>

              <div className="command">
                <span className="prompt">$</span>
                <span className="cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
