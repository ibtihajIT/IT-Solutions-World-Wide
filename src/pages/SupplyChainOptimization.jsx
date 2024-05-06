import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Welcome from "../components/supply_chain_optimization/Welcome";
import Footer from "../components/Footer";
import Text from "../components/supply_chain_optimization/Text";
import Imagetext from "../components/supply_chain_optimization/Imagetext";
import Imagetext2 from "../components/supply_chain_optimization/Imagetext2";
import Imagetext3 from "../components/supply_chain_optimization/Imagetext3";
import { Helmet } from "react-helmet";

const SupplyChainOptimization = () => {
  // Animation controls for each section
  const textControls = useAnimation();
  const imagetext1Controls = useAnimation();
  const imagetext2Controls = useAnimation();
  const imagetext3Controls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const imagetext1Ref = useRef(null);
  const imagetext2Ref = useRef(null);
  const imagetext3Ref = useRef(null);
  // Animation variants
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
        <title>Supply Chain Optimization Study</title>
        <meta
          name="description"
          content="Explore supply chain optimization with our in-depth study. Learn how to make processes better and help your business grow."
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
      <section ref={imagetext1Ref}>
        <motion.div
          initial="hidden"
          animate={imagetext1Controls}
          variants={variants}
        >
          <Imagetext />
        </motion.div>
      </section>
      <section ref={imagetext2Ref}>
        <motion.div
          initial="hidden"
          animate={imagetext2Controls}
          variants={variants}
        >
          <Imagetext2 />
        </motion.div>
      </section>
      <section ref={imagetext3Ref}>
        <motion.div
          initial="hidden"
          animate={imagetext3Controls}
          variants={variants}
        >
          <Imagetext3 />
        </motion.div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default SupplyChainOptimization;
