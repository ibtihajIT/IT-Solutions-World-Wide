import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Welcome from "../components/change_management/Welcome";
import Text from "../components/change_management/Text";
import Imagetext from "../components/change_management/Imagetext";
import Imagetext2 from "../components/change_management/Imagetext2";
import Imagetext3 from "../components/change_management/Imagetext3";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const ChangeManagement = () => {
  // Custom hooks to control animations for each section
  const textControls = useAnimation();
  const imageText1Controls = useAnimation();
  const imageText2Controls = useAnimation();
  const imageText3Controls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const imageText1Ref = useRef(null);
  const imageText2Ref = useRef(null);
  const imageText3Ref = useRef(null);

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
    const imageText1Trigger =
      imageText1Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imageText2Trigger =
      imageText2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imageText3Trigger =
      imageText3Ref.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate each section based on scroll position
    if (scrollPosition > textTrigger) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }

    if (scrollPosition > imageText1Trigger) {
      imageText1Controls.start("visible");
    } else {
      imageText1Controls.start("hidden");
    }

    if (scrollPosition > imageText2Trigger) {
      imageText2Controls.start("visible");
    } else {
      imageText2Controls.start("hidden");
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
        <title>Change Management</title>
        <meta
          name="description"
          content="Our change management solutions can help you deal with big changes at work easily. We'll help you handle everything smoothly. Start now and reach your full potential!"
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
        animate={imageText1Controls}
        variants={variants}
        ref={imageText1Ref}
      >
        <Imagetext />
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
        animate={imageText3Controls}
        variants={variants}
        ref={imageText3Ref}
      >
        <Imagetext3 />
      </motion.section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default ChangeManagement;
