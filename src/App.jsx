import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Hero = lazy(() => import("./compontents/hero/Hero"));
const Services = lazy(() => import("./compontents/services/Services"));
const Portfolio = lazy(() => import("./compontents/portfolio/Portfolio"));
const Contact = lazy(() => import("./compontents/contact/Contact"));

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.6, ease: "easeInOut" } },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{textAlign: 'center', marginTop: '2rem'}}>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
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
              </motion.div>
            }
          />
          <Route path="/Contact" element={<motion.div {...pageTransition}><Contact /></motion.div>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
