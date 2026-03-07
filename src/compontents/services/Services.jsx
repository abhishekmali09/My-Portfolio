import "./services.css";
import Spline from "@splinetool/react-spline";

const Services = () => {
  return (
    <div className="services">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>
      <div className="services__grid">
        <div className="services__spline">
          <Spline
            scene="https://prod.spline.design/wnFRlQE5DnLpyK8O/scene.splinecode"
            className="splineScene"
          />
        </div>
        <div className="services__cards">
          <div className="services__card">
            <div className="services__card-icon">💻</div>
            <h3>Programming</h3>
            <p>Java, JavaScript, Python</p>
          </div>
          <div className="services__card">
            <div className="services__card-icon">🎨</div>
            <h3>Frontend</h3>
            <p>React.js, Tailwind CSS, Material UI</p>
          </div>
          <div className="services__card">
            <div className="services__card-icon">⚙️</div>
            <h3>Backend</h3>
            <p>Spring Boot, Spring Framework, REST APIs</p>
          </div>
          <div className="services__card">
            <div className="services__card-icon">☁️</div>
            <h3>Microservices</h3>
            <p>Spring Cloud, API Gateway, Eureka</p>
          </div>
          <div className="services__card">
            <div className="services__card-icon">🗄️</div>
            <h3>Databases</h3>
            <p>MySQL, MongoDB</p>
          </div>
          <div className="services__card">
            <div className="services__card-icon">📨</div>
            <h3>Messaging</h3>
            <p>RabbitMQ</p>
          </div>
          <div className="services__card">
            <div className="services__card-icon">🔐</div>
            <h3>Authentication</h3>
            <p>OAuth2, Keycloak, JWT</p>
          </div>
          <div className="services__card">
            <div className="services__card-icon">📚</div>
            <h3>Libraries</h3>
            <p>Axios, React Router, React Hook Form, Zod</p>
          </div>
          <div className="services__card">
            <div className="services__card-icon">🛠️</div>
            <h3>Tools</h3>
            <p>Git, GitHub, Docker, Vite, Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;