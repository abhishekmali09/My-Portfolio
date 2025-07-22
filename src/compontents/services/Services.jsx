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
      <div className="resumeSection">
        <img src="/resume.jpg" alt="Resume" className="serviceImgLarge" />
        <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
          <button className="downloadBtnLarge">Download Resume</button>
        </a>
      </div>
    </div>
  );
};
export default Services;