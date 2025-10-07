import { motion } from "framer-motion";
import Shape from "./Shape";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

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
    <div className="h-screen overflow-hidden flex relative md:flex-row flex-col">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between md:items-start items-center text-center md:text-left gap-9 md:gap-0">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-12 text-[30px] md:text-[55px] lg:text-[60px] xl:text-[72px] ml-5 text-[#6e2d04]"
        >
          Hey There,
          <br />
          <span className="text-white ml-5">I am Abhishek!</span>
        </motion.h1>

        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="text-xl ml-5 text-[#6e2d04] w-full md:w-auto px-4 md:px-0"
        >
          <motion.h2 variants={awardVariants}>Software Developer</motion.h2>
          <motion.p variants={awardVariants}>Passionate React Developer and B.Tech CSE student (GGSIPU, 2026) with experience in
          <br/> building responsive web apps using React.js and Tailwind.
          <br/>
  Skilled in Java, Spring Boot, and problem-solving, with a strong work ethic and focus on
 user-centric solutions.</motion.p>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-end md:items-end">
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="hidden md:flex flex-col gap-3 p-4 bg-[#6e2d04] rounded-br-[10px]"
        >
          <motion.a variants={followVariants} href="https://www.linkedin.com/in/abhishekmali09/">
          <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" className="w-[30px] h-[30px]"/>
          </motion.a>
          <motion.a variants={followVariants} href="https://github.com/abhishekmali09">
          <img width="64" height="64" src="https://img.icons8.com/sf-black/64/github.png" alt="github" className="w-[30px] h-[30px]"/>
          </motion.a>
          <motion.div variants={followVariants} className="w-5 h-5">
            <motion.div className="bg-[#f6eeee] text-xs rotate-90 w-max h-full origin-top-left -translate-y-5 px-2 flex items-center rounded-br-[10px]">follow me!!</motion.div>
          </motion.div>
        </motion.div>


        <Link
          to="/Contact"
          className="mb-12"
          style={{ textDecoration: 'none' }}
        >
          <motion.div
            className="relative"
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
              <text className="tracking-[3px] text-xl">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="tracking-[3px] text-xl">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-20 h-20 flex items-center justify-center">
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
        </Link>
      </div>
      <div className="absolute top-[350px] md:top-[100px] lg:top-[100px] left-[150px] md:left-[225px] lg:left-[450px] xl:left-[500px] 2xl:left-[450px] w-[600px] md:w-[500px] lg:w-[600px] h-[600px] md:h-[500px] lg:h-[600px] overflow-hidden -z-10 md:top-[245px] md:left-[225px]">
        <Canvas>
          <Suspense fallback={<div>loading...</div>}>
            <Shape />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-0 right-0 left-0 m-auto w-max">
          <img src="/222.png" alt="Hero Image" className="object-cover left-[10px] w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
