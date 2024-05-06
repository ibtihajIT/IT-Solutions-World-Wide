import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/digital_marketing/Welcome";
import Imagetext from "../components/digital_marketing/ImageText";
import Cards from "../components/digital_marketing/Cards";
import Text2 from "../components/digital_marketing/Text";
import Imagetext2 from "../components/digital_marketing/ImageText2";
import { Helmet } from "react-helmet";

const Designing = () => {
  // Animation controls for sections
  const imagetextControls = useAnimation();
  const text2Controls = useAnimation();
  const cardsControls = useAnimation();
  const imagetext2Controls = useAnimation();

  // Refs for each section
  const imagetextRef = useRef(null);
  const text2Ref = useRef(null);
  const cardsRef = useRef(null);
  const imagetext2Ref = useRef(null);

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to trigger animations when sections are in view
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate trigger positions based on section refs
    const imagetextTrigger =
      imagetextRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const text2Trigger =
      text2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const cardsTrigger =
      cardsRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const imagetext2Trigger =
      imagetext2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate each section based on scroll position
    if (scrollPosition > imagetextTrigger) {
      imagetextControls.start("visible");
    } else {
      imagetextControls.start("hidden");
    }

    if (scrollPosition > text2Trigger) {
      text2Controls.start("visible");
    } else {
      text2Controls.start("hidden");
    }

    if (scrollPosition > cardsTrigger) {
      cardsControls.start("visible");
    } else {
      cardsControls.start("hidden");
    }

    if (scrollPosition > imagetext2Trigger) {
      imagetext2Controls.start("visible");
    } else {
      imagetext2Controls.start("hidden");
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
        <title>Digital Marketing</title>
        <meta
          name="description"
          content="Enhance your online presence with our top-notch digital marketing services. Increase your brand visibility and drive more traffic to your website."
        />
      </Helmet>
      <section>
        <Header />
      </section>
      <section>
        <Welcome />
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
      <section ref={text2Ref}>
        <motion.div
          initial="hidden"
          animate={text2Controls}
          variants={variants}
        >
          <Text2 />
        </motion.div>
      </section>
      <section ref={cardsRef}>
        <motion.div
          initial="hidden"
          animate={cardsControls}
          variants={variants}
        >
          <Cards />
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
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Designing;
