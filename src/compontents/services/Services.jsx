import Spline from '@splinetool/react-spline';

const Services = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 justify-center items-center py-10 w-auto min-h-screen mt-24 bg-[#bc7a13] px-4 md:px-0">
      <div className="flex items-center justify-start w-full lg:w-[580px] h-[220px] md:h-[480px] min-w-[180px] min-h-[180px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)] bg-white/10 backdrop-blur-[10px] mb-4 md:mb-0">
        <Spline
          scene="https://prod.spline.design/wnFRlQE5DnLpyK8O/scene.splinecode"
          className="w-full h-full rounded-2xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full md:w-[700px] max-w-[900px] h-full">
        <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-10 md:py-10 px-8 md:px-8 min-w-0 md:min-w-[300px] max-w-full md:max-w-[420px] text-center transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(110,45,4,0.18)] hover:scale-105 hover:-translate-y-1.5 flex flex-col items-center text-[1rem] md:text-[1.2rem] h-full justify-center">
          <div className="mb-4 text-[#6e2d04] text-[1.5rem] md:text-[2rem] font-bold"> Frontend</div>
          <p className="text-[#333] text-[1rem] md:text-[1.1rem] font-light">React,Tailwind CSS</p>
        </div>
        <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-10 md:py-10 px-8 md:px-8 min-w-0 md:min-w-[300px] max-w-full md:max-w-[420px] text-center transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(110,45,4,0.18)] hover:scale-105 hover:-translate-y-1.5 flex flex-col items-center text-[1rem] md:text-[1.2rem] h-full justify-center">
          <div className="mb-4 text-[#6e2d04] text-[1.5rem] md:text-[2rem] font-bold"> Languages</div>
          <p className="text-[#333] text-[1rem] md:text-[1.1rem] font-light"> HTML,CSS,Java,JavaScript, Python</p>
        </div>
        <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-10 md:py-10 px-8 md:px-8 min-w-0 md:min-w-[300px] max-w-full md:max-w-[420px] text-center transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(110,45,4,0.18)] hover:scale-105 hover:-translate-y-1.5 flex flex-col items-center text-[1rem] md:text-[1.2rem] h-full justify-center">
          <div className="mb-4 text-[#6e2d04] text-[1.5rem] md:text-[2rem] font-bold">Backend </div>
          <p className="text-[#333] text-[1rem] md:text-[1.1rem] font-light">Spring,Spring Boot,MySQL</p>
        </div>
        <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-10 md:py-10 px-8 md:px-8 min-w-0 md:min-w-[300px] max-w-full md:max-w-[420px] text-center transition-all duration-200 cursor-pointer hover:shadow-[0_8px_32px_rgba(110,45,4,0.18)] hover:scale-105 hover:-translate-y-1.5 flex flex-col items-center text-[1rem] md:text-[1.2rem] h-full justify-center">
          <div className="mb-4 text-[#6e2d04] text-[1.5rem] md:text-[2rem] font-bold"> Tools</div>
          <p className="text-[#333] text-[1rem] md:text-[1.1rem] font-light">Figma,Canva</p>
        </div>
      </div>
    </div>
  );
};
export default Services;