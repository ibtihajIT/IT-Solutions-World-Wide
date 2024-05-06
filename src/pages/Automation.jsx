import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/automation/Welcome";
import Cards from "../components/automation/Cards";
import Text from "../components/automation/Text";
import Text2 from "../components/automation/Text2";
import { Helmet } from "react-helmet";

const Automation = () => {
  // Custom hooks to control animations for each section
  const textControls = useAnimation();
  const cardsControls = useAnimation();
  const text2Controls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const cardsRef = useRef(null);
  const text2Ref = useRef(null);

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to trigger animations when section is in view
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate trigger positions based on section refs
    const textTrigger =
      textRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const cardsTrigger =
      cardsRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text2Trigger =
      text2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate each section based on scroll position
    if (scrollPosition > textTrigger) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }

    if (scrollPosition > cardsTrigger) {
      cardsControls.start("visible");
    } else {
      cardsControls.start("hidden");
    }

    if (scrollPosition > text2Trigger) {
      text2Controls.start("visible");
    } else {
      text2Controls.start("hidden");
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
        <title>Automation</title>
        <meta
          name="description"
          content="Make your work easier and faster with our automation tools for managing supply chains. Find out how our technology can change the way you do things."
        />
      </Helmet>
      <section>
        <Header />
      </section>
      <Welcome /> {/* No animation for Welcome section */}
      <motion.section
        initial="hidden"
        animate={textControls}
        variants={variants}
        ref={textRef}
      >
        <Text />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={cardsControls}
        variants={variants}
        ref={cardsRef}
      >
        <Cards />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={text2Controls}
        variants={variants}
        ref={text2Ref}
      >
        <Text2 />
      </motion.section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Automation;
