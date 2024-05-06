import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Welcome from "../components/lean&sixsigma/Welcome";
import Footer from "../components/Footer";
import Cards from "../components/lean&sixsigma/Cards";
import { Helmet } from "react-helmet";

const LeanSixSigma = () => {
  // Custom hook to control animations for scroll-triggered sections
  const cardsControls = useAnimation();

  // Ref for the Cards section
  const cardsRef = useRef(null);

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to trigger animations when section is in view
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate trigger position for Cards section
    const cardsTrigger =
      cardsRef.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate the Cards section based on scroll position
    if (scrollPosition > cardsTrigger) {
      cardsControls.start("visible");
    } else {
      cardsControls.start("hidden");
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Lean & Six Sigma Implementation</title>
        <meta
          name="description"
          content="Make your business work better with our Lean and Six Sigma plans. They help you do things right and cut down on mistakes, making your work faster and smoother."
        />
      </Helmet>
      <section>
        <Header />
      </section>
      <section>
        <Welcome />
      </section>
      <motion.section
        initial="hidden"
        animate={cardsControls}
        variants={variants}
        ref={cardsRef}
      >
        <Cards />
      </motion.section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default LeanSixSigma;
