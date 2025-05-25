import styles from "./terminal.module.css";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0D1117] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalButtons}>
                <div
                  className={`${styles.terminalButton} ${styles.closeButton}`}
                ></div>
                <div
                  className={`${styles.terminalButton} ${styles.minimizeButton}`}
                ></div>
                <div
                  className={`${styles.terminalButton} ${styles.maximizeButton}`}
                ></div>
              </div>
              <div className={styles.terminalTitle}>about.tsx</div>
            </div>

            <div className={styles.terminalContent}>
              <div className="mb-8">
                <div className={styles.command}>$ whoami</div>
                <div className={styles.comment}>{"// About Me"}</div>
                <p className={styles.text}>
                  I&apos;m a passionate full-stack developer with a strong
                  foundation in web technologies and a drive to create impactful
                  digital solutions. My journey in software development has
                  equipped me with both technical expertise and problem-solving
                  skills.
                </p>
              </div>

              <div className="mb-8">
                <div className={styles.command}>$ skills</div>
                <div className={styles.comment}>{"// Technical Stack"}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={styles.card}>
                    <div className="flex items-center mb-3">
                      <span className={styles.arrow}>&gt;</span>
                      <span className={styles.text}>Frontend</span>
                    </div>
                    <ul>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>React.js / Next.js</span>
                      </li>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>TypeScript</span>
                      </li>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>HTML5 / CSS3</span>
                      </li>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>
                          Bootstrap / Tailwind
                        </span>
                      </li>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>Redux / Context API</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.card}>
                    <div className="flex items-center mb-3">
                      <span className={styles.arrow}>&gt;</span>
                      <span className={styles.text}>Backend</span>
                    </div>
                    <ul>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>Node.js / Express</span>
                      </li>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>Python / Django</span>
                      </li>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>SQL / MongoDB</span>
                      </li>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>RESTful APIs</span>
                      </li>
                      <li className={styles.listItem}>
                        <span className={styles.arrow}>$</span>
                        <span className={styles.text}>
                          AWS / Cloud Services
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className={styles.command}>$ education</div>
                <div className={styles.comment}>{"// Academic Background"}</div>
                <div className={styles.card}>
                  <div className="flex items-center mb-3">
                    <span className={styles.arrow}>&gt;</span>
                    <span className={styles.text}>University of Ottawa</span>
                  </div>
                  <div className="space-y-2">
                    <p className={styles.textMuted}>
                      $ degree: Bachelor of Computer Science
                    </p>
                    <p className={styles.text}>$ graduation: 2025</p>
                    <p className={styles.textMuted}>$ coursework:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li className={styles.text}>Software Engineering</li>
                      <li className={styles.text}>Database Management</li>
                      <li className={styles.text}>Web Development</li>
                      <li className={styles.text}>
                        Data Structures & Algorithms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.command}>$ interests</div>
                <div className={styles.comment}>{"// Personal Interests"}</div>
                <p className={styles.text}>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, and
                  staying active in the developer community. I&apos;m always
                  eager to learn and take on new challenges. I also enjoy
                  participating in hackathons and coding competitions to enhance
                  my problem-solving skills and meet fellow developers.
                </p>
              </div>

              <div className="mt-8">
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
  );
}
