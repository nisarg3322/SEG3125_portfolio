import styles from "./terminal.module.css";

export default function About() {
  return (
    <div className="min-vh-100 py-3">
      <div className="container pb-5">
        <h2 className="display-4 fw-bold text-center pb-2">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={styles.terminal}>
              <div
                className={`${styles.terminalHeader} d-flex align-items-center p-3`}
              >
                <div className="d-flex gap-2 me-3">
                  <div
                    className={`${styles.terminalButton} ${styles.closeButton} rounded-circle`}
                  />
                  <div
                    className={`${styles.terminalButton} ${styles.minimizeButton} rounded-circle`}
                  />
                  <div
                    className={`${styles.terminalButton} ${styles.maximizeButton} rounded-circle`}
                  />
                </div>
                <div
                  className={`${styles.terminalTitle} text-center flex-grow-1`}
                >
                  about_me.tsx
                </div>
              </div>
              <div className={`${styles.terminalContent} p-4`}>
                <div className="mb-8">
                  <div className={styles.command}>$ whoami</div>
                  <div className={styles.comment}>{"// About Me"}</div>
                  <p className={styles.text}>
                    I&apos;m a passionate full-stack developer with a strong
                    foundation in web technologies and a drive to create
                    impactful digital solutions. My journey in software
                    development has equipped me with both technical expertise
                    and problem-solving skills.
                  </p>
                </div>

                <div className="mb-8">
                  <div className={styles.command}>$ skills</div>
                  <div className={styles.comment}>{"// Technical Stack"}</div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "1rem",
                    }}
                  >
                    <div className={`${styles.card} card`}>
                      <div className={`${styles.cardBody} card-body`}>
                        <div className="d-flex align-items-center mb-3">
                          <span className={`${styles.arrow} me-2`}>&gt;</span>
                          <span className={styles.text}>Frontend</span>
                        </div>
                        <ul className="list-unstyled">
                          <li className="d-flex align-items-center mb-2">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>
                              React.js / Next.js
                            </span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>TypeScript</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>HTML5 / CSS3</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>
                              Bootstrap / Tailwind
                            </span>
                          </li>
                          <li className="d-flex align-items-center">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>
                              Redux / Context API
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={`${styles.card} card`}>
                      <div className={`${styles.cardBody} card-body`}>
                        <div className="d-flex align-items-center mb-3">
                          <span className={`${styles.arrow} me-2`}>&gt;</span>
                          <span className={styles.text}>Backend</span>
                        </div>
                        <ul className="list-unstyled">
                          <li className="d-flex align-items-center mb-2">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>
                              Node.js / Express
                            </span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>Python / Django</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>SQL / MongoDB</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>RESTful APIs</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <span className={`${styles.arrow} me-2`}>$</span>
                            <span className={styles.text}>
                              AWS / Cloud Services
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 mb-8">
                  <div className={styles.command}>$ education</div>
                  <div className={styles.comment}>
                    {"// Academic Background"}
                  </div>
                  <div className={`${styles.card} card`}>
                    <div className={`${styles.cardBody} card-body`}>
                      <div className="d-flex align-items-center mb-3">
                        <span className={`${styles.arrow} me-2`}>&gt;</span>
                        <span className={styles.text}>
                          University of Ottawa
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className={styles.textMuted}>
                          $ degree: Bachelor of Computer Science
                        </p>
                        <p className={styles.text}>$ graduation: 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <div className={styles.command}>$ interests</div>
                  <div className={styles.comment}>
                    {"// Personal Interests"}
                  </div>
                  <p className={styles.text}>
                    When I&apos;m not coding, you can find me exploring new
                    technologies, contributing to open-source projects, and
                    staying active in the developer community. I&apos;m always
                    eager to learn and take on new challenges. I also enjoy
                    participating in hackathons and coding competitions to
                    enhance my problem-solving skills and meet fellow
                    developers.
                  </p>
                </div>

                <div className="mt-4">
                  <span className={styles.prompt}>
                    C:\Users\patel\Desktop\portfolio&gt;
                  </span>
                  <span className={styles.cursor}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
