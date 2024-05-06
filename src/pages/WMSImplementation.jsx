import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/wms_implementation/Welcome";
import Text from "../components/wms_implementation/Text";
import Text2 from "../components/wms_implementation/Text2";
import Imagetext from "../components/wms_implementation/Imagetext";
import Text3 from "../components/wms_implementation/Text3";
import Imagetext2 from "../components/wms_implementation/Imagetext2";
import Text4 from "../components/wms_implementation/Text4";
import WorkflowComponent from "../components/wms_implementation/WorkflowComponent";
import { Helmet } from "react-helmet";

const WMSImplementation = () => {
  // Animation controls for each section
  const textControls = useAnimation();
  const text2Controls = useAnimation();
  const imagetextControls = useAnimation();
  const text3Controls = useAnimation();
  const imagetext2Controls = useAnimation();
  const text4Controls = useAnimation();
  const workflowControls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const text2Ref = useRef(null);
  const imagetextRef = useRef(null);
  const text3Ref = useRef(null);
  const imagetext2Ref = useRef(null);
  const text4Ref = useRef(null);
  const workflowRef = useRef(null);

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
    const text2Trigger =
      text2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imagetextTrigger =
      imagetextRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text3Trigger =
      text3Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imagetext2Trigger =
      imagetext2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text4Trigger =
      text4Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const workflowTrigger =
      workflowRef.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate each section based on scroll position

    if (scrollPosition > textTrigger) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }

    if (scrollPosition > text2Trigger) {
      text2Controls.start("visible");
    } else {
      text2Controls.start("hidden");
    }

    if (scrollPosition > imagetextTrigger) {
      imagetextControls.start("visible");
    } else {
      imagetextControls.start("hidden");
    }

    if (scrollPosition > text3Trigger) {
      text3Controls.start("visible");
    } else {
      text3Controls.start("hidden");
    }

    if (scrollPosition > imagetext2Trigger) {
      imagetext2Controls.start("visible");
    } else {
      imagetext2Controls.start("hidden");
    }

    if (scrollPosition > text4Trigger) {
      text4Controls.start("visible");
    } else {
      text4Controls.start("hidden");
    }

    if (scrollPosition > workflowTrigger) {
      workflowControls.start("visible");
    } else {
      workflowControls.start("hidden");
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
        <title>WMS Implementation</title>
        <meta
          name="description"
          content="Make your supply chain much better with our great WMS Implementation services. You'll see everything running smoothly and getting better!."
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
      <section ref={text2Ref}>
        <motion.div
          initial="hidden"
          animate={text2Controls}
          variants={variants}
        >
          <Text2 />
        </motion.div>
      </section>
      <section ref={imagetextRef}>
        <motion.div
          initial="hidden"
          animate={imagetextControls}
          variants={variants}
        >
          <Imagetext />
        </motion.div>
      </section>
      <section ref={text3Ref}>
        <motion.div
          initial="hidden"
          animate={text3Controls}
          variants={variants}
        >
          <Text3 />
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
      <section ref={text4Ref}>
        <motion.div
          initial="hidden"
          animate={text4Controls}
          variants={variants}
        >
          <Text4 />
        </motion.div>
      </section>
      <section ref={workflowRef}>
        <motion.div
          initial="hidden"
          animate={workflowControls}
          variants={variants}
        >
          <WorkflowComponent />
        </motion.div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default WMSImplementation;
