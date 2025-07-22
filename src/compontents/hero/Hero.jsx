import "./hero.css";
import Speech from "./Speech";
import { motion } from "framer-motion";
import Shape from "./Shape";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="htitle"
        >
          Hey There,
          <br />
          <span>I am Abhishek!</span>
        </motion.h1>

        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="hsubtitle"
        >
          <motion.h2 variants={awardVariants}>Frontend Developer</motion.h2>
          <motion.p variants={awardVariants}>I am a beginner level dev</motion.p>
        </motion.div>
        <div className="hbtn"></div>
      </div>
      <div className="hSection right">
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="#">
            <img src="#" alt="social icon" />
          </motion.a>
          <motion.a variants={followVariants} href="#">
            <img src="#" alt="social icon" />
          </motion.a>
          <motion.a variants={followVariants} href="#">
            <img src="#" alt="social icon" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <motion.div className="followText">dunk me!!</motion.div>
          </motion.div>
        </motion.div>
        <Speech />

        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="#6e2d04" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        <Canvas>
          <Suspense fallback={<div>loading...</div>}>
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/222.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
