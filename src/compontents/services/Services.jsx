import { useState, useRef } from "react";
import "./services.css";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence, useInView } from "motion/react";

const skills = [
  { icon: "💻", title: "Programming", desc: "Java, JavaScript, Python", accent: "#D4A843" },
  { icon: "🎨", title: "Frontend", desc: "React.js, Tailwind CSS, Material UI", accent: "#C4983D" },
  { icon: "⚙️", title: "Backend", desc: "Spring Boot, Spring Framework, REST APIs", accent: "#B8922E" },
  { icon: "☁️", title: "Microservices", desc: "Spring Cloud, API Gateway, Eureka", accent: "#8B6914" },
  { icon: "🗄️", title: "Databases", desc: "MySQL, MongoDB", accent: "#5C3D2E" },
  { icon: "📨", title: "Messaging", desc: "RabbitMQ", accent: "#D4B15E" },
  { icon: "🔐", title: "Authentication", desc: "OAuth2, Keycloak, JWT", accent: "#3D2B1F" },
  { icon: "📚", title: "Libraries", desc: "Axios, React Router, React Hook Form, Zod", accent: "#A07D2E" },
  { icon: "🛠️", title: "Tools", desc: "Git, GitHub, Docker, Vite, Figma", accent: "#6B4E1B" },
];

const Services = () => {
  const [revealedCount, setRevealedCount] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const handleRevealNext = () => {
    if (revealedCount < skills.length) {
      setRevealedCount((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setRevealedCount(0);
  };

  // Cards that are still in the deck (not yet revealed)
  const deckCards = skills.slice(revealedCount);
  // Cards that have been revealed
  const revealedCards = skills.slice(0, revealedCount);

  return (
    <div className="services" ref={sectionRef}>
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="services__layout">
        {/* Left: Spline 3D */}
        <div className="services__spline">
          <Spline
            scene="https://prod.spline.design/wnFRlQE5DnLpyK8O/scene.splinecode"
            className="splineScene"
          />
        </div>

        {/* Right: Card Deck */}
        <div className="services__deck-area">
          {/* The stacked deck */}
          <div className="services__deck" onClick={handleRevealNext}>
            {deckCards.map((skill, i) => {
              const deckIndex = i;
              const totalInDeck = deckCards.length;

              return (
                <motion.div
                  key={skill.title}
                  className="services__deck-card"
                  style={{
                    zIndex: totalInDeck - deckIndex,
                  }}
                  initial={false}
                  animate={{
                    y: deckIndex * -4,
                    x: deckIndex * 2,
                    rotate: deckIndex * 1.5,
                    scale: 1 - deckIndex * 0.02,
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="services__deck-card-inner">
                    <div className="services__deck-card-icon">{skill.icon}</div>
                    <h3>{skill.title}</h3>
                    <p>{skill.desc}</p>
                    <div
                      className="services__deck-card-accent"
                      style={{ background: skill.accent }}
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* Click prompt */}
            {deckCards.length > 0 && (
              <motion.div
                className="services__deck-prompt"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>tap to reveal</span>
                <span className="services__deck-count">
                  {revealedCount}/{skills.length}
                </span>
              </motion.div>
            )}
          </div>

          {/* Revealed cards — fanned out */}
          <div className="services__revealed">
            <AnimatePresence>
              {revealedCards.map((skill, i) => (
                <motion.div
                  key={skill.title}
                  className="services__revealed-card"
                  initial={{
                    opacity: 0,
                    x: -200,
                    y: 80,
                    rotate: -25,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -50,
                    scale: 0.8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 0.8,
                  }}
                  style={{
                    borderLeft: `4px solid ${skill.accent}`,
                  }}
                >
                  <span className="services__revealed-icon">{skill.icon}</span>
                  <div className="services__revealed-text">
                    <h4>{skill.title}</h4>
                    <p>{skill.desc}</p>
                  </div>
                  <span className="services__revealed-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Reset button */}
          {revealedCount === skills.length && (
            <motion.button
              className="services__reset"
              onClick={handleReset}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Shuffle & Reset ↻
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;