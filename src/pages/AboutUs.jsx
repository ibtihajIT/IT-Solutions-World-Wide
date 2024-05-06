import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Text from "../components/about_us/Text";
import Welcome from "../components/about_us/Welcome";
import { Helmet } from "react-helmet";
const About = () => {
  // Animation controls for sections excluding Welcome
  const textControls = useAnimation();

  // Ref for the text section
  const textRef = useRef(null);

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to trigger text section animation when in view
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const textTrigger =
      textRef.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate text section based on scroll position
    if (scrollPosition > textTrigger) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
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
        <title>About Us</title>
        <meta
          name="description"
          content="IT Solutions Worldwide is part of S&S Partners Holding, an ambitious and innovative company, striving to find the best suitable business solutions for our clients. Our clients implement complex engineering and operational projects."
        />
      </Helmet>
      <section>
        <Header />
      </section>
      <section>
        <Welcome />
      </section>
      <section ref={textRef}>
        <motion.div initial="hidden" animate={textControls} variants={variants}>
          <Text />
        </motion.div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default About;
