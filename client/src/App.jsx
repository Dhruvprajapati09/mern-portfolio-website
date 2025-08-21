import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Dhruv Prajapati</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span className="highlight">Dhruv Prajapati</span> 👋</h1>
        <p>A passionate <b>MERN Stack Developer</b></p>
      </motion.section>

      {/* About */}
      <motion.section 
        id="about"
        className="section"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I am a full-stack developer specializing in the MERN stack. 
          I love solving real-world problems with clean and efficient code.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section 
        id="skills"
        className="section"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>React</span>
          <span>Node.js</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section 
        id="projects"
        className="section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio built with React and Framer Motion.</p>
          </div>
          <div className="project-card">
            <h3>Another Project</h3>
            <p>Details about another project.</p>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section 
        id="contact"
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Dhruv Prajapati. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
