import { Suspense, lazy } from "react";
import Navbar from "./compontents/navbar/Navbar";

const Hero = lazy(() => import("./compontents/hero/Hero"));
const Services = lazy(() => import("./compontents/services/Services"));
const Portfolio = lazy(() => import("./compontents/portfolio/Portfolio"));
const Contact = lazy(() => import("./compontents/contact/Contact"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              fontSize: "1.2rem",
              color: "#6e2d04",
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
