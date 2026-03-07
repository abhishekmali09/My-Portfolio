import "./hero.css";
import { motion } from "framer-motion";
import Shape from "./Shape";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const awardVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const followVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const Hero = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="hero__title"
          >
            Hey There,
            <br />
            <span>I am Abhishek!</span>
          </motion.h1>

          <motion.div
            variants={awardVariants}
            initial="initial"
            animate="animate"
            className="hero__subtitle"
          >
            <motion.h2 variants={awardVariants}>Full-Stack Developer</motion.h2>
            <motion.p variants={awardVariants}>
              Aspiring Full-Stack Developer and B.Tech Computer Science student
              (GGSIPU, 2026) with hands-on experience building scalable web
              applications and microservices using React.js, Tailwind CSS, Java,
              and Spring Boot. Experienced with REST APIs, event-driven systems
              using RabbitMQ, and secure authentication with OAuth2 and JWT.
              Passionate about clean UI/UX and solving real-world problems
              through technology.
            </motion.p>
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a href="#contact" className="hero__cta" onClick={handleContactClick}>
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="hero__right">
          <motion.div
            variants={followVariants}
            initial="initial"
            animate="animate"
            className="hero__socials"
          >
            <motion.a
              variants={followVariants}
              href="https://www.linkedin.com/in/abhishekmali09/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="LinkedIn"
              />
            </motion.a>
            <motion.a
              variants={followVariants}
              href="https://github.com/abhishekmali09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/sf-black/64/github.png"
                alt="GitHub"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="hero__bg">
        <Canvas>
          <Suspense fallback={null}>
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hero__img">
          <img src="PROFESSIONAL PHOTOGRAPH.png" alt="Abhishek" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
