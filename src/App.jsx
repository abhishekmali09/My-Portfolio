import { Suspense, lazy } from "react";
import Navbar from "./compontents/navbar/Navbar";
import FloatingElements from "./compontents/FloatingElements";

const Hero = lazy(() => import("./compontents/hero/Hero"));
const Services = lazy(() => import("./compontents/services/Services"));
const Portfolio = lazy(() => import("./compontents/portfolio/Portfolio"));
const Contact = lazy(() => import("./compontents/contact/Contact"));

const App = () => {
  return (
    <>
      <FloatingElements />
      <Navbar />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              fontSize: "1.4rem",
              color: "#2A1810",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              letterSpacing: "0.05em",
            }}
          >
            Loading...
          </div>
        }
      >
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="skills">
            <Services />
          </section>
          <section id="projects">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </Suspense>
    </>
  );
};

export default App;
