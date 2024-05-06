import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/Header";
import Welcome from "../components/home/Welcome";
import Supply from "../components/home/Supply";
import CloudServices from "../components/home/CloudServices";
import ITSupport from "../components/home/ITSupport";
import HowWeWork from "../components/home/Howwework";
import OurClients from "../components/home/Ourclients";
import Heroimage1 from "../components/home/Heroimage1";
import HeroImage2 from "../components/home/Heroimage2";
import HeroImage3 from "../components/home/Heroimage3";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  // Custom hook to control animations for scroll-triggered sections
  const supplyControls = useAnimation();
  const cloudServicesControls = useAnimation();
  const itSupportControls = useAnimation();
  const howWeWorkControls = useAnimation();
  const ourClientsControls = useAnimation();
  const contactControls = useAnimation();
  const heroImage1Controls = useAnimation();
  const heroImage2Controls = useAnimation();
  const heroImage3Controls = useAnimation();

  // Refs for scroll-triggered sections
  const supplyRef = useRef(null);
  const cloudServicesRef = useRef(null);
  const itSupportRef = useRef(null);
  const howWeWorkRef = useRef(null);
  const ourClientsRef = useRef(null);
  const contactRef = useRef(null);
  const heroImage1Ref = useRef(null);
  const heroImage2Ref = useRef(null);
  const heroImage3Ref = useRef(null);

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
    const supplyTrigger =
      supplyRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const cloudServicesTrigger =
      cloudServicesRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const itSupportTrigger =
      itSupportRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const howWeWorkTrigger =
      howWeWorkRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const ourClientsTrigger =
      ourClientsRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const contactTrigger =
      contactRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const heroImage1Trigger =
      heroImage1Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const heroImage2Trigger =
      heroImage2Ref.current.offsetTop - windowHeight + windowHeight * 0.5;
    const heroImage3Trigger =
      heroImage3Ref.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Trigger animations based on scroll position
    if (scrollPosition > supplyTrigger) {
      supplyControls.start("visible");
    } else {
      supplyControls.start("hidden");
    }

    if (scrollPosition > cloudServicesTrigger) {
      cloudServicesControls.start("visible");
    } else {
      cloudServicesControls.start("hidden");
    }

    if (scrollPosition > itSupportTrigger) {
      itSupportControls.start("visible");
    } else {
      itSupportControls.start("hidden");
    }

    if (scrollPosition > howWeWorkTrigger) {
      howWeWorkControls.start("visible");
    } else {
      howWeWorkControls.start("hidden");
    }

    if (scrollPosition > ourClientsTrigger) {
      ourClientsControls.start("visible");
    } else {
      ourClientsControls.start("hidden");
    }

    if (scrollPosition > contactTrigger) {
      contactControls.start("visible");
    } else {
      contactControls.start("hidden");
    }

    if (scrollPosition > heroImage1Trigger) {
      heroImage1Controls.start("visible");
    } else {
      heroImage1Controls.start("hidden");
    }

    if (scrollPosition > heroImage2Trigger) {
      heroImage2Controls.start("visible");
    } else {
      heroImage2Controls.start("hidden");
    }

    if (scrollPosition > heroImage3Trigger) {
      heroImage3Controls.start("visible");
    } else {
      heroImage3Controls.start("hidden");
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
        <title>IT Solution WorldWide</title>
        <meta
          name="description"
          content="Welcome to IT Solutions Worldwide! We're here to help your business move forward with smart and affordable technology solutions. We're not like other consulting companies. We specialize in bringing your business into the digital age."
        />
      </Helmet>
      <section>
        <Header />
      </section>
      <Welcome /> {/* No animation for Welcome section */}
      <motion.section
        initial="hidden"
        animate={supplyControls}
        variants={variants}
        ref={supplyRef}
      >
        <Supply />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={heroImage1Controls}
        variants={variants}
        ref={heroImage1Ref}
      >
        <Heroimage1 />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={cloudServicesControls}
        variants={variants}
        ref={cloudServicesRef}
      >
        <CloudServices />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={heroImage2Controls}
        variants={variants}
        ref={heroImage2Ref}
      >
        <HeroImage2 />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={itSupportControls}
        variants={variants}
        ref={itSupportRef}
      >
        <ITSupport />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={heroImage3Controls}
        variants={variants}
        ref={heroImage3Ref}
      >
        <HeroImage3 />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={howWeWorkControls}
        variants={variants}
        ref={howWeWorkRef}
      >
        <HowWeWork />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={ourClientsControls}
        variants={variants}
        ref={ourClientsRef}
      >
        <OurClients />
      </motion.section>
      <motion.section
        initial="hidden"
        animate={contactControls}
        variants={variants}
        ref={contactRef}
      >
        <Contact />
      </motion.section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
