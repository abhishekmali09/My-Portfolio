import "./services.css";
import Spline from '@splinetool/react-spline';

const Services = () => {
  return (
    <div className="servicesPage serviceBg">
      <div className="splineSection">
        <Spline 
          scene="https://prod.spline.design/wnFRlQE5DnLpyK8O/scene.splinecode" 
          className="splineScene"
        />
      </div>
      <div className="servicesList">
        {/* Placeholder for 4 card components */}
        <div className="serviceCard">
          <div className="serviceTitle"> Frontend</div>
          <p>React,Tailwind CSS</p>
        </div>
        <div className="serviceCard">
          <div className="serviceTitle"> Languages</div>
          <p> HTML,CSS,Java,JavaScript, Python</p>
        </div>
        <div className="serviceCard">
          <div className="serviceTitle">Backend </div>
          <p>Spring,Spring Boot,MySQL</p>
        </div>
        <div className="serviceCard">
          <div className="serviceTitle"> Tools</div>
          <p>Figma,Canva</p>
        </div>
      </div>
    </div>
  );
};
export default Services;