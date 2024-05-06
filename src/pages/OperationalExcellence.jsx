import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/operational_excellence/Welcome";
import Text from "../components/operational_excellence/Text";
import Imagetext from "../components/operational_excellence/Imagetext";
import Imagewithtext from "../components/operational_excellence/Imagewithtext";
import { Helmet } from "react-helmet";

const OperationalExcellence = () => {
  // Custom hooks to control animations for each section
  const textControls = useAnimation();
  const imageTextControls = useAnimation();
  const imageWithTextControls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const imageTextRef = useRef(null);
  const imageWithTextRef = useRef(null);

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
    const imageTextTrigger =
      imageTextRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imageWithTextTrigger =
      imageWithTextRef.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate each section based on scroll position
    if (scrollPosition > textTrigger) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }

    if (scrollPosition > imageTextTrigger) {
      imageTextControls.start("visible");
    } else {
      imageTextControls.start("hidden");
    }

    if (scrollPosition > imageWithTextTrigger) {
      imageWithTextControls.start("visible");
    } else {
      imageWithTextControls.start("hidden");
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
        <title>Operational Excellence</title>
        <meta
          name="description"
          content="Discover the key to achieving Operational Excellence with our comprehensive website. Learn proven strategies and best practices to optimize your business operations. Boost efficiency and drive success."
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
        animate={imageTextControls}
        variants={variants}
        ref={imageTextRef}
      >
        <Imagetext />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={imageWithTextControls}
        variants={variants}
        ref={imageWithTextRef}
      >
        <Imagewithtext />
      </motion.section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default OperationalExcellence;
