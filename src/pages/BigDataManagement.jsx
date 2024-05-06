import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Welcome from "../components/big_data_management/Welcome";
import Footer from "../components/Footer";
import Text from "../components/big_data_management/Text";
import ImageText from "../components/big_data_management/ImageText";
import Imagetext2 from "../components/big_data_management/Imagetext2";
import Imagetext3 from "../components/big_data_management/Imagetext3";
import Imagetext4 from "../components/big_data_management/Imagetext4";
import Text2 from "../components/big_data_management/Text2";
import { Helmet } from "react-helmet";

const BigDataManagement = () => {
  // Custom hooks to control animations for each section
  const textControls = useAnimation();
  const imagetext1Controls = useAnimation();
  const imagetext2Controls = useAnimation();
  const imagetext3Controls = useAnimation();
  const imagetext4Controls = useAnimation();
  const text2Controls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const imagetext1Ref = useRef(null);
  const imagetext2Ref = useRef(null);
  const imagetext3Ref = useRef(null);
  const imagetext4Ref = useRef(null);
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
    const imagetext1Trigger =
      imagetext1Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imagetext2Trigger =
      imagetext2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imagetext3Trigger =
      imagetext3Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imagetext4Trigger =
      imagetext4Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text2Trigger =
      text2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate each section based on scroll position
    if (scrollPosition > textTrigger) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }

    if (scrollPosition > imagetext1Trigger) {
      imagetext1Controls.start("visible");
    } else {
      imagetext1Controls.start("hidden");
    }

    if (scrollPosition > imagetext2Trigger) {
      imagetext2Controls.start("visible");
    } else {
      imagetext2Controls.start("hidden");
    }

    if (scrollPosition > imagetext3Trigger) {
      imagetext3Controls.start("visible");
    } else {
      imagetext3Controls.start("hidden");
    }

    if (scrollPosition > imagetext4Trigger) {
      imagetext4Controls.start("visible");
    } else {
      imagetext4Controls.start("hidden");
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
        <title>Big Data Management</title>
        <meta
          name="description"
          content="Optimize your supply chain management with our advanced Big Data solutions. Harness the power of data analytics to drive success and stay ahead of the competition."
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
        animate={imagetext1Controls}
        variants={variants}
        ref={imagetext1Ref}
      >
        <ImageText />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={imagetext2Controls}
        variants={variants}
        ref={imagetext2Ref}
      >
        <Imagetext2 />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={imagetext3Controls}
        variants={variants}
        ref={imagetext3Ref}
      >
        <Imagetext3 />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={imagetext4Controls}
        variants={variants}
        ref={imagetext4Ref}
      >
        <Imagetext4 />
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

export default BigDataManagement;
