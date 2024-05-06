import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Welcome from "../components/cloud_data_ai/Welcome";
import Text from "../components/cloud_data_ai/Text";
import Footer from "../components/Footer";
import Imagetext from "../components/cloud_data_ai/ImageText";
import Imagetext2 from "../components/cloud_data_ai/ImageText2";
import Text2 from "../components/cloud_data_ai/Text2";
import Text3 from "../components/cloud_data_ai/Text3";
import { Helmet } from "react-helmet";

const CloudDataAI = () => {
  // Custom hooks to control animations for each section
  const text3Controls = useAnimation();
  const imageTextControls = useAnimation();
  const textControls = useAnimation();
  const imageText2Controls = useAnimation();
  const text2Controls = useAnimation();

  // Refs for each section
  const text3Ref = useRef(null);
  const imageTextRef = useRef(null);
  const textRef = useRef(null);
  const imageText2Ref = useRef(null);
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
    const text3Trigger =
      text3Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imageTextTrigger =
      imageTextRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const textTrigger =
      textRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imageText2Trigger =
      imageText2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text2Trigger =
      text2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate each section based on scroll position
    if (scrollPosition > text3Trigger) {
      text3Controls.start("visible");
    } else {
      text3Controls.start("hidden");
    }

    if (scrollPosition > imageTextTrigger) {
      imageTextControls.start("visible");
    } else {
      imageTextControls.start("hidden");
    }

    if (scrollPosition > textTrigger) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }

    if (scrollPosition > imageText2Trigger) {
      imageText2Controls.start("visible");
    } else {
      imageText2Controls.start("hidden");
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
        <title>Cloud Data & AI</title>
        <meta
          name="description"
          content="Learn about Cloud Data and AI in Oracle Cloud. Find out how it can help you learn new things and make new ideas with our advanced technology. Start exploring now!"
        />
      </Helmet>
      <section>
        <Header />
      </section>
      <Welcome /> {/* No animation for Welcome section */}
      <motion.section
        initial="hidden"
        animate={text3Controls}
        variants={variants}
        ref={text3Ref}
      >
        <Text3 />
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
        animate={textControls}
        variants={variants}
        ref={textRef}
      >
        <Text />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={imageText2Controls}
        variants={variants}
        ref={imageText2Ref}
      >
        <Imagetext2 />
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

export default CloudDataAI;
