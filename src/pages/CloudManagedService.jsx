import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Welcome from "../components/cloud_managed_services/Welcome";
import Text from "../components/cloud_managed_services/Text";
import Footer from "../components/Footer";
import Cards from "../components/cloud_managed_services/Cards";
import Imagetext from "../components/cloud_managed_services/ImageText";
import Cards2 from "../components/cloud_managed_services/Cards2";
import Text2 from "../components/cloud_managed_services/Text2";
import Text3 from "../components/cloud_managed_services/Text3";
import { Helmet } from "react-helmet";

const CloudManagedService = () => {
  // Custom hooks to control animations for each section
  const textControls = useAnimation();
  const cardsControls = useAnimation();
  const imageTextControls = useAnimation();
  const text2Controls = useAnimation();
  const cards2Controls = useAnimation();
  const text3Controls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const cardsRef = useRef(null);
  const imageTextRef = useRef(null);
  const text2Ref = useRef(null);
  const cards2Ref = useRef(null);
  const text3Ref = useRef(null);

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
    const imageTextTrigger =
      imageTextRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text2Trigger =
      text2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const cards2Trigger =
      cards2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text3Trigger =
      text3Ref.current.offsetTop - windowHeight + windowHeight * 0.5;

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

    if (scrollPosition > imageTextTrigger) {
      imageTextControls.start("visible");
    } else {
      imageTextControls.start("hidden");
    }

    if (scrollPosition > text2Trigger) {
      text2Controls.start("visible");
    } else {
      text2Controls.start("hidden");
    }

    if (scrollPosition > cards2Trigger) {
      cards2Controls.start("visible");
    } else {
      cards2Controls.start("hidden");
    }

    if (scrollPosition > text3Trigger) {
      text3Controls.start("visible");
    } else {
      text3Controls.start("hidden");
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
        <title>Cloud Managed Services</title>
        <meta
          name="description"
          content="Make your business better with our Oracle Cloud managed services. Let us help you make your cloud system work its best."
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
        animate={imageTextControls}
        variants={variants}
        ref={imageTextRef}
      >
        <Imagetext />
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
        animate={cards2Controls}
        variants={variants}
        ref={cards2Ref}
      >
        <Cards2 />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={text3Controls}
        variants={variants}
        ref={text3Ref}
      >
        <Text3 />
      </motion.section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default CloudManagedService;
