import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Welcome from "../components/cloud_transformation/Welcome";
import Footer from "../components/Footer";
import Text from "../components/cloud_transformation/Text";
import ImageText from "../components/cloud_transformation/Imagetext";
import Text2 from "../components/cloud_transformation/Text2";
import Imagetext2 from "../components/cloud_transformation/ImageText2";
import Text3 from "../components/cloud_transformation/Text3";
import ImageText3 from "../components/cloud_transformation/ImageText3";
import Imagetext4 from "../components/cloud_transformation/Imagetext4";
import { Helmet } from "react-helmet";

const CloudTransformation = () => {
  // Custom hooks to control animations for each section
  const textControls = useAnimation();
  const imageTextControls = useAnimation();
  const text2Controls = useAnimation();
  const imageText2Controls = useAnimation();
  const text3Controls = useAnimation();
  const imageText3Controls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const imageTextRef = useRef(null);
  const text2Ref = useRef(null);
  const imageText2Ref = useRef(null);
  const text3Ref = useRef(null);
  const imageText3Ref = useRef(null);
  const imagetext4Ref = useRef(null);
  const imagetext4Controls = useAnimation();

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
    const text2Trigger =
      text2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imageText2Trigger =
      imageText2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text3Trigger =
      text3Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imageText3Trigger =
      imageText3Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imagetext4Trigger =
      imagetext4Ref.current.offsetTop - windowHeight + windowHeight * 0.5;

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

    if (scrollPosition > imageText2Trigger) {
      imageText2Controls.start("visible");
    } else {
      imageText2Controls.start("hidden");
    }

    if (scrollPosition > text3Trigger) {
      text3Controls.start("visible");
    } else {
      text3Controls.start("hidden");
    }

    if (scrollPosition > imageText3Trigger) {
      imageText3Controls.start("visible");
    } else {
      imageText3Controls.start("hidden");
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
        <title>Cloud Transformation</title>
        <meta
          name="description"
          content="Transform your business with Oracle Cloud. Our cloud transformation services offer seamless migration, enhanced security, and increased efficiency. Explore now!"
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
        <ImageText />
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
        animate={text3Controls}
        variants={variants}
        ref={text3Ref}
      >
        <Text3 />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={imageText3Controls}
        variants={variants}
        ref={imageText3Ref}
      >
        <ImageText3 />
      </motion.section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default CloudTransformation;
