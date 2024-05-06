import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/warehouse_design/Welcome";
import Text from "../components/warehouse_design/Text";
import Cards from "../components/warehouse_design/Cards";
import { Helmet } from "react-helmet";

const WarehouseDesign = () => {
  // Animation controls for each section
  const textControls = useAnimation();
  const cardsControls = useAnimation();

  // Refs for each section
  const textRef = useRef(null);
  const cardsRef = useRef(null);

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
    const cardsTrigger =
      cardsRef.current.offsetTop - windowHeight + windowHeight * 0.5;

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
        <title>Warehouse Design</title>
        <meta
          name="description"
          content="Find new ways to design warehouses to make them better and use space well. Our skilled team can assist you in making a warehouse layout that works well and is organized."
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
      <section ref={cardsRef}>
        <motion.div
          initial="hidden"
          animate={cardsControls}
          variants={variants}
        >
          <Cards />
        </motion.div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default WarehouseDesign;
