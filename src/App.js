import { FaLaptopCode, FaPaintBrush, FaBolt, FaMobileAlt, FaDatabase, FaUserShield, FaUserTie, FaWrench } from 'react-icons/fa';


import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImg from './assets/rishu_profile.jpg';
import aboutImg from './assets/rishu_about.jpg';
import resumePdf from './assets/rishu_resume.pdf';
import backgroundImg from './assets/background.jpg';

function App() {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-circle"></div>
          <span className="dev-text">Dev</span><span className="byrishu-text">byRishu</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="hero-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <img src={profileImg} alt="Rishu Pandey" className="hero-image" />
          <h1 className="hero-name">Rishu Pandey</h1>
          <p className="hero-title">A Full Stack Developer | MERN Stack Developer</p>
          <div className="resume-buttons">
            <a href="#resume" className="btn">View Resume</a>
            <a href={resumePdf} download className="btn highlight">Download Resume</a>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="mailto:rishupandey8935@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/rishu-pandey-aa9602285" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/rishupandeyy" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-left">
          <img src={aboutImg} alt="Rishu Kumari" className="about-photo" />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p>I'm <strong>Rishu Kumari</strong>, a highly motivated and detail-oriented <strong>Full Stack Developer</strong> with over <strong>3 years of experience</strong> in designing, developing, and deploying full-stack applications using the <strong>MERN Stack</strong>.</p>
          <p>I specialize in building clean, scalable, and efficient web applications with intuitive UI and maintainable backends. Always learning and adapting to new technologies.</p>
          <p>
            Whether you need a fully functional web solution, a responsive UI, or technical problem-solving—I'm here to help. I'm currently open for <strong>freelance projects</strong>, <strong>internships</strong>, or <strong>full-time roles</strong>.
          </p>
          <ul className="about-info">
            <li><strong>Full Name:</strong> Rishu Kumari</li>
            <li><strong>Role:</strong> Full Stack Developer (MERN)</li>
            <li><strong>Experience:</strong> 3+ Years</li>
            <li><strong>Core Skills:</strong> React, Node.js, MongoDB, Express, REST APIs, Firebase, Git, Tailwind CSS</li>
            <li><strong>Location:</strong> Dehradun, Uttarakhand, India</li>
            <li><strong>Email:</strong> <a href="mailto:rishupandey8935@gmail.com">rishupandey8935@gmail.com</a></li>
            <li><strong>Freelance:</strong> Available</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
  <h2 className="section-title">Services I Provide</h2>
  <p className="section-subtitle">These are the services I offer based on my MERN stack expertise and frontend creativity.</p>

  <div className="services-grid">
    {[
      {
        icon: <FaLaptopCode />,
        title: "Full Stack Web Development",
        desc: "Dynamic web apps with MongoDB, Express, React, and Node."
      },
      {
        icon: <FaPaintBrush />,
        title: "Custom UI / UX Design",
        desc: "Modern interfaces that are responsive, clean, and intuitive."
      },
      {
        icon: <FaBolt />,
        title: "Landing Page Creation",
        desc: "High-converting mobile-optimized pages for businesses and portfolios."
      },
      {
        icon: <FaWrench />,
        title: "Bug Fixing & Optimization",
        desc: "Fixing layout bugs, improving SEO, and boosting performance."
      },
      {
        icon: <FaUserTie />,
        title: "Portfolio / Resume Websites",
        desc: "Developer/student portfolios that impress and convert."
      },
      {
        icon: <FaDatabase />,
        title: "Admin Dashboards",
        desc: "Secure dashboards with login systems, charts, and analytics."
      },
      {
        icon: <FaUserShield />,
        title: "API Integration & Auth",
        desc: "Implementing login/auth systems, REST APIs, Firebase, etc."
      },
      {
        icon: <FaMobileAlt />,
        title: "Code Review / Mentorship",
        desc: "1-on-1 sessions for beginners and junior devs."
      }
    ].map((service, idx) => (
      <div className="service-card" key={idx}>
        <div className="service-icon">{service.icon}</div>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <h2 className="section-title">My Resume</h2>

        <div className="resume-objective">
          <h3>🎯 Objective</h3>
          <p>I am a passionate and result-driven Full Stack Developer (MERN) with a strong foundation in building scalable web applications and intuitive user experiences. I aim to leverage my skills in MongoDB, Express.js, React, and Node.js to deliver meaningful, high-performance solutions. I am committed to continuous learning, clean code practices, and contributing to innovative projects that make a real-world impact.</p>
        </div>

        <div className="resume-grid">
          <div className="resume-column">
            <h3>🎓 Education</h3>
            <div className="resume-item">
              <h4>Masters of Computer Applications(MCA)</h4>
              <span>2024–2026 | Graphic Era Deemed to be University</span>
              <p>Specialised in Machine Learning </p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Computer Applications(BCA)</h4>
              <span>2021–2024 | Patliputra University</span>
              <p>Focused on software development, databases, and full stack technologies.</p>
            </div>
          </div>

          <div className="resume-column">
            <h3>💼 Experience</h3>
            <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <span>2024–Present | Intership</span>
              <p>Handled MERN projects, responsive design, and REST API integrations.</p>
            </div>
            <div className="resume-item">
              <h4>Web Development Intern</h4>
              <span>2025 | WebDev Co.</span>
              <p>Worked with UI and API integration as part of a remote team.</p>
            </div>
          </div>
        </div>

        <section className="skills-section">
  <h3>My Skills</h3>
  <div className="skills-grid">
    {[
      { icon: <i className="devicon-html5-plain colored"></i>, label: "HTML" },
      { icon: <i className="devicon-css3-plain colored"></i>, label: "CSS" },
      { icon: <i className="devicon-javascript-plain colored"></i>, label: "JavaScript" },
      { icon: <i className="devicon-react-original colored"></i>, label: "React" },
      { icon: <i className="devicon-nodejs-plain colored"></i>, label: "Node.js" },
      { icon: <i className="devicon-express-original colored"></i>, label: "Express" },
      { icon: <i className="devicon-mongodb-plain colored"></i>, label: "MongoDB" },
      { icon: <i className="devicon-git-plain colored"></i>, label: "Git" },
      { icon: <i className="devicon-github-original"></i>, label: "GitHub" },
      { icon: <i className="devicon-java-plain colored"></i>, label: "Java" },
    ].map((skill, idx) => (
      <div className="skill-card" key={idx}>
        <div className="skill-icon">{skill.icon}</div>
        <p>{skill.label}</p>
      </div>
    ))}
  </div>
</section>


        <div className="certificate-section">
          <h3>📜 Certificates</h3>
          <div className="certificates-grid">
            {[{
              img: "/assets/apna_college certificate.jpg",
              pdf: "/assets/apna_college_MERN_certificate.pdf",
              title: "MERN Stack – Apna College",
              desc: "Full stack training with React, Node, MongoDB, and Express."
            },
            {
              img: "/assets/IBM_certificate.jpg",
              pdf: "/assets/rishu_IBM.pdf",
              title: "Machine Learning – IBM",
              desc: "Completed ML with Python at IBM Cognitive Class."
            },
            {
              img: "/assets/php_rishu.jpg",
              pdf: "/assets/php_file.pdf",
              title: "PHP with MySQL",
              desc: "Built hotel booking system using PHP and MySQL."
            },
            {
              img: "/assets/offer_letter.jpg",
              pdf: "/assets/rishu_offer_letter.pdf",
              title: "Internship – Future Interns",
              desc: "Selected for Full Stack Web Internship – April 2025."
            }
            ].map((cert, index) => (
              <div className="certificate-card" key={index}>
                <img src={cert.img} alt={cert.title} />
                <h4>{cert.title}</h4>
                <p>{cert.desc}</p>
                <div className="certificate-buttons">
                  <a href={cert.pdf} target="_blank" className="btn" rel="noreferrer">View</a>
                  <a href={cert.pdf} download className="btn highlight">Download</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="project-note">
          <p>🔗 Explore my project showcase in the <strong>Projects</strong> section below!</p>
        </div>

        <div className="resume-download">
          <a href={resumePdf} target="_blank" className="btn" rel="noreferrer">📖 View Full Resume</a>
          <a href={resumePdf} download className="btn highlight">📄 Download Full Resume</a>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
<section id="projects" className="projects-section">
  <div className="projects-header">
    <h2 className="section-title">Projects</h2>
  </div>
  <div className="projects-grid">
    {/* Project 1 */}
    <div className="project-card">
      <h3>Diabetes Prediction</h3>
      <p>
        A machine learning model built in Jupyter Notebook to predict diabetes
        using data analysis and logistic regression.
      </p>
      <div className="tech-used">
        <span>Python</span>
        <span>Jupyter</span>
        <span>Pandas</span>
        <span>Scikit-learn</span>
      </div>
      <div className="project-links">
        <a href="https://github.com/rishupandeyy/Dibetics-Predection" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <h3>Typing Speed Test</h3>
      <p>
        A web-based typing speed test app that calculates words-per-minute and typing accuracy using real-time logic.
      </p>
      <div className="tech-used">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
      <div className="project-links">
        <a href="https://github.com/rishupandeyy/Typing-Speed-T" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <h3>Basic Calculator</h3>
      <p>
        A simple calculator designed with clean HTML layout and basic functionality for basic arithmetic operations.
      </p>
      <div className="tech-used">
        <span>HTML</span>
      </div>
      <div className="project-links">
        <a href="https://github.com/rishupandeyy/calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>
</section>


      {/* Blog Section */}
      <section id="blog" className="blog-section">
        <h2 className="section-title">Latest Blog</h2>
        <div className="blog-single">
          <a href="https://rishupandey.hashnode.dev/how-i-built-my-first-portfolio-website-using-mern" target="_blank" rel="noopener noreferrer">
            <img src="assets/blog_i1.jpg" alt="Portfolio Blog" className="blog-single-img" />
          </a>
          <div className="blog-content">
            <h3>How I Built My First Portfolio Website Using MERN</h3>
            <p>A walkthrough of building my personal portfolio with React, Node.js, and MongoDB.</p>
            <p className="blog-date">May 2025</p>
            <a href="https://rishupandey.hashnode.dev/how-i-built-my-first-portfolio-website-using-mern" target="_blank" className="btn highlight" rel="noopener noreferrer">Read Full Blog</a>
          </div>
        </div>

        <div className="blog-image-row">
          <img src="assets/blog_i1.jpg" alt="Blog 1" />
          <img src="assets/blog_i2.jpg" alt="Blog 2" />
          <img src="assets/blog_i3.jpg" alt="Blog 3" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
  <h2 className="section-title">Contact Me</h2>
  <p className="section-subtitle">I'd love to connect with you! Feel free to drop a message or reach out through any platform below.</p>

  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit" className="btn">Send Message</button>
  </form>

  {/* Social Icons */}
  <div className="contact-social-icons">
    <a href="mailto:rishupandey8935@gmail.com" title="Email">
      <i className="fas fa-envelope"></i>
    </a>
    <a href="https://github.com/rishupandeyy" target="_blank" rel="noopener noreferrer" title="GitHub">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/rishu-pandey-aa9602285" target="_blank" rel="noopener noreferrer" title="LinkedIn">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://onecompiler.com/users/3z25nnq3m" target="_blank" rel="noopener noreferrer" title="OneCompiler">
      <i className="fas fa-code"></i>
    </a>
  </div>
</section>



      <footer className="footer">
        <p>© 2025 devByRishu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
