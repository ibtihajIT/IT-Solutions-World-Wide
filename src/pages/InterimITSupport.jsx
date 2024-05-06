import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/interim_it_support/Welcome";
import Text from "../components/interim_it_support/Text";
import Imagetext from "../components/interim_it_support/ImageText";
import { Helmet } from "react-helmet";

const InterimITSupport = () => {
  // Custom hooks to control animations for each section
  const textControls = useAnimation();
  const imageTextControls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const imageTextRef = useRef(null);

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
        <title>Interim IT Support</title>
        <meta
          name="description"
          content="Providing reliable interim IT support solutions to keep your business running smoothly. Contact us for expert assistance today!"
        />
      </Helmet>
      <section>
        <Header />
      </section>

      <Welcome />
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
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default InterimITSupport;
