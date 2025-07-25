import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import hospital from "../../../../public/Images/hospital.png";
import WeatherWise from "../../../../public/Images/WeatherWise.png";
import sport from "../../../../public/Images/sport .png";
import cabcontrol from "../../../../public/Images/cabcontrol.png";
import upcoming from "../../../../public/Images/upcoming project.png";

const items = [
  {
    id: 1,
    img: {hospital},
    title: "Freelancing Project",
    desc: " Designed and developed a healthcare web platform that allows users to search for hospitals, view detailed doctor profiles, and book appointments online.",
    link: "https://cureitabroad.com/",
  },
  {
    id: 2,
    img: {WeatherWise},
    title: "WeatherWise",
    desc: "Developed WeatherWise, a Raspberry Pi-based weather station that provides real-time, geo-mapped weather data for rural areas using integrated sensors and Maps API.",
    link: " https://elaborate-pasca-3e5fd1.netlify.app/",
  },
  {
    id: 3,
    img: {sport},
    title: " Live Sports Tracker",
    desc: "Developed a real-time sports tracking website using React.js and Tailwind CSS with live match data and a responsive, dynamically updating UI.",
    link: " https://github.com/abhishekmali09/Live-Sports-Tracker",
  },
  {
    id: 4,
    img: {cabcontrol},
    title: " Corporate Cab Management System",
    desc: "Built CabControl, a corporate cab management system using React.js, Tailwind CSS, and Google Maps API with real-time tracking, smart scheduling, and integrated analytics dashboards.",
    link: "https://github.com/abhishekmali09/cabcontrol",
  },
  {
    id: 5,
    img: {upcoming},
    title: "Upcoming Project",
    desc: "I'm currently working on a new project that leverages modern web technologies and AI. While I can't reveal full details just yet, it's something I'm really excited about. Stay tuned — more coming soon!",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#6e2d04"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;

// import { useEffect, useRef, useState } from "react";
// import "./portfolio.css";
// import {motion, useInView, useScroll,useTransform} from "motion/react";
// const item = [
//   {
//     id: 1,
//     img: "#",
//     title: "Full Stack Blog Application",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//     link: "/",
//   },
//   {
//     id: 2,
//     img: "#",
//     title: "School Management System",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//     link: "/",
//   },
// ]

// const imgVariants = {
//   initial: {
//     x: -500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
// };

// const textVariants = {
//   initial: {
//     x: 500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//       staggerChildren: 0.5,
//     },
//   },
// };

// const ListItem = ({ item }) => {

//     const ref= useRef(null);
//     const isInViewport = useInView  (ref, { margin: "-100px" });
//     return (
//         <div className="pItem">
//             <motion.div
//             variants={imgVariants}
//             animate={isInViewport ? "animate" : "initial"}
//             className="pImg">
//                 <img src={item.img} alt="" />
//             </motion.div>
//             <motion.div
//             variants={textVariants}
//             animate={isInViewport ? "animate" : "initial"}
//             className="pText">
//                 <motion.h1  variants={textVariants}>{item.title}</motion.h1>
//                 <motion.p  variants={textVariants}>{item.desc}</motion.p>
//                 <motion.a  variants={textVariants} href={item.link}>
//                     <button>View More</button>
//                 </motion.a>
//             </motion.div>
//             <section></section>
            
//         </div>
//     );
// };

// const Portfolio = () => {
//     const [containerDistance,setcontainerDisiance]= useState(0);
//     const ref = useRef(null);

//    useEffect(() => {
//          if(ref.current){
//             const rect = ref.current.getBoundingClientRect();  
//             setcontainerDisiance(rect.left); 
//          }  
//             } ,[])

       
//     const{scrollYProgress} =useScroll({target:ref});

//     const xTranslate = useTransform(
//         scrollYProgress, 
//         [0, 1], 
//         [0, -window.innerWidth*item.length]
//     );
//     return<div className="portfolio" ref={ref}>
//         <motion.div className ="pList" style={{x:xTranslate}}>
//         <div className="empty" 
//         style={{width: window.innerWidth-containerDistance,
//           backgroundColor: "transparent"}}
//         />
//             {item.map((item) => (
//                 <ListItem item={item} key={item.id} />
//             ))}
//             </motion.div>
//             <section></section>
//             <section></section>
//         </div>
// };
// export default Portfolio;