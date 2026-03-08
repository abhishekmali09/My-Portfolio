import { useRef } from "react";
import "./portfolio.css";
import { motion, useInView } from "motion/react";
import hospital from "../../assets/Images/hospital.png";
import weatherwise from "../../assets/Images/weatherwise.png";
import sport from "../../assets/Images/sport.png";
import cabcontrol from "../../assets/Images/cabcontrol.png";
import fitinsight from "../../assets/Images/fitinsight.png";
import bankingApp from "../../assets/Images/banking_app.png";

const items = [
  {
    id: 1,
    img: hospital,
    title: "Freelancing Project",
    desc: "Designed and developed a healthcare web platform that allows users to search for hospitals, view detailed doctor profiles, and book appointments online.",
    link: "https://cureitabroad.com/",
    color: "#C4983D",
  },
  {
    id: 2,
    img: weatherwise,
    title: "WeatherWise",
    desc: "Developed WeatherWise, a Raspberry Pi-based weather station that provides real-time, geo-mapped weather data for rural areas using integrated sensors and Maps API.",
    link: "https://elaborate-pasca-3e5fd1.netlify.app/",
    color: "#8B6914",
  },
  {
    id: 3,
    img: sport,
    title: "Live Sports Tracker",
    desc: "Developed a real-time sports tracking website using React.js and Tailwind CSS with live match data and a responsive, dynamically updating UI.",
    link: "https://github.com/abhishekmali09/Live-Sports-Tracker",
    color: "#B8922E",
  },
  {
    id: 4,
    img: cabcontrol,
    title: "Corporate Cab Management",
    desc: "Built CabControl, a corporate cab management system using React.js, Tailwind CSS, and Google Maps API with real-time tracking, smart scheduling, and integrated analytics dashboards.",
    link: "https://github.com/abhishekmali09/cabcontrol",
    color: "#D4B15E",
  },
  {
    id: 5,
    img: fitinsight,
    title: "FitInsight — AI Fitness Platform",
    desc: "Developed a microservices-based fitness tracking platform using Spring Cloud, Eureka, and API Gateway with secure OAuth2/Keycloak auth, AI-powered workout analysis via Gemini API, food image-based nutrition detection, and RabbitMQ event-driven processing. Built a React dashboard with charts to visualize fitness progress.",
    link: "https://github.com/abhishekmali09",
    color: "#5C3D2E",
  },
  {
    id: 6,
    img: bankingApp,
    title: "Banking Application",
    desc: "Developed a RESTful banking application using Spring Boot 3.5 and Java 21, supporting account CRUD and balance operations. Implemented persistence using Spring Data JPA and MySQL with automated schema management. Applied DTO–Entity separation with mappers and configured CORS for seamless Angular frontend integration.",
    link: "https://github.com/abhishekmali09",
    color: "#3D2B1F",
  },
];

const ProjectCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="portfolio__card"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
    >
      <div className="portfolio__card-img">
        <img src={item.img} alt={item.title} loading="lazy" />
        <div
          className="portfolio__card-overlay"
          style={{ background: `linear-gradient(135deg, ${item.color}cc, ${item.color}66)` }}
        />
      </div>
      <div className="portfolio__card-content">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <a
          href={item.link}
          target={item.link !== "/" ? "_blank" : undefined}
          rel={item.link !== "/" ? "noopener noreferrer" : undefined}
          className="portfolio__card-btn"
        >
          {item.link === "/" ? "Coming Soon" : "View Project"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="portfolio__grid">
        {items.map((item, index) => (
          <ProjectCard item={item} index={index} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
