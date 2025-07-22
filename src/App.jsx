import Hero from "./compontents/hero/Hero";
import Services from "./compontents/services/Services";
import Portfolio from "./compontents/portfolio/Portfolio";
import Contact from "./compontents/contact/Contact";
const App = () => {
  return (
    <div className="container">
      <section id="#home">
      <Hero />
      </section>
      <section id="#services">
      <Services />
      </section>
      <Portfolio />
      <section id="#contact">
      <Contact />
      </section>
    </div>
  );
};
export default App;
