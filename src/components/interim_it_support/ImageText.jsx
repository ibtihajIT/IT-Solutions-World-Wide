import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import imageUrl1 from "../../assets/interim_assets/Group 241.png";
import imageUrl2 from "../../assets/interim_assets/Group 243.png";
import imageUrl3 from "../../assets/interim_assets/Interviewing Coaching.png";
import imageUrl4 from "../../assets/interim_assets/Group 245.png";

const Imagetext = () => {
  // Animation controls for each section
  const firstSectionControls = useAnimation();
  const secondSectionControls = useAnimation();
  const thirdSectionControls = useAnimation();
  const fourthSectionControls = useAnimation();

  // Refs for each section
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);

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
    const firstSectionTrigger =
      firstSectionRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const secondSectionTrigger =
      secondSectionRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const thirdSectionTrigger =
      thirdSectionRef.current.offsetTop - windowHeight + windowHeight * 0.5;
    const fourthSectionTrigger =
      fourthSectionRef.current.offsetTop - windowHeight + windowHeight * 0.5;

    // Animate each section based on scroll position
    if (scrollPosition > firstSectionTrigger) {
      firstSectionControls.start("visible");
    } else {
      firstSectionControls.start("hidden");
    }

    if (scrollPosition > secondSectionTrigger) {
      secondSectionControls.start("visible");
    } else {
      secondSectionControls.start("hidden");
    }

    if (scrollPosition > thirdSectionTrigger) {
      thirdSectionControls.start("visible");
    } else {
      thirdSectionControls.start("hidden");
    }

    if (scrollPosition > fourthSectionTrigger) {
      fourthSectionControls.start("visible");
    } else {
      fourthSectionControls.start("hidden");
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
    <div className="flex flex-col space-y-6 py-12">
      {/* First Section */}
      <div
        className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12"
        ref={firstSectionRef}
      >
        <div className="lg:w-[673px]">
          <motion.img
            src={imageUrl1}
            alt="placeholder"
            className="w-full h-auto"
            initial="hidden"
            animate={firstSectionControls}
            variants={variants}
          />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h2 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0 mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Development Expertise
            </span>
          </h2>
          <ul className="text-lg lg:text-xl text-black leading-7 mx-6">
            <li style={{ listStyleType: "disc" }}>Front-end Developer</li>
            <li style={{ listStyleType: "disc" }}>
              Back-end Developer (.NET, PHP, Java, C++, Python)
            </li>
            <li style={{ listStyleType: "disc" }}>
              App Developer (Android, iOS)
            </li>
            <li style={{ listStyleType: "disc" }}>Website Developer</li>
            <li style={{ listStyleType: "disc" }}>Graphic Designer</li>
            <li style={{ listStyleType: "disc" }}>
              ERP Developer (SAP / Oracle Cloud / Odoo)
            </li>
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div
        className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12"
        ref={secondSectionRef}
      >
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h2 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0 mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Software Expertise
            </span>
          </h2>
          <ul className="text-lg lg:text-xl text-black leading-7 mx-6">
            <li style={{ listStyleType: "disc" }}>Software Engineer</li>
            <li style={{ listStyleType: "disc" }}>Project Manager</li>
            <li style={{ listStyleType: "disc" }}>Digital Marketing Support</li>
            <li style={{ listStyleType: "disc" }}>
              Micro Electronics Engineer
            </li>
          </ul>
        </div>
        <div className="lg:w-[673px]">
          <motion.img
            src={imageUrl2}
            alt="placeholder"
            className="w-full h-auto"
            initial="hidden"
            animate={secondSectionControls}
            variants={variants}
          />
        </div>
      </div>

      {/* Third Section */}
      <div
        className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12"
        ref={thirdSectionRef}
      >
        <div className="lg:w-[673px]">
          <motion.img
            src={imageUrl3}
            alt="placeholder"
            className="w-full h-auto"
            initial="hidden"
            animate={thirdSectionControls}
            variants={variants}
          />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h2 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0 mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Functional Expertise
            </span>
          </h2>
          <ul className="text-lg lg:text-xl text-black leading-7 mx-6">
            <li style={{ listStyleType: "disc" }}>
              ERP Consultant (SAP / Oracle Cloud / Odoo)
            </li>
            <li style={{ listStyleType: "disc" }}>BI Specialist</li>
            <li style={{ listStyleType: "disc" }}>Finance Consultant</li>
            <li style={{ listStyleType: "disc" }}>Supply Chain Consultant</li>
            <li style={{ listStyleType: "disc" }}>Tester</li>
          </ul>
        </div>
      </div>

      {/* Fourth Section */}
      <div
        className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12"
        ref={fourthSectionRef}
      >
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h2 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0 mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Operational Expertise
            </span>
          </h2>
          <ul className="text-lg lg:text-xl text-black leading-7 mx-6">
            <li style={{ listStyleType: "disc" }}>Data Entry Specialist</li>
            <li style={{ listStyleType: "disc" }}>Data Analysts</li>
            <li style={{ listStyleType: "disc" }}>Data Migration</li>
            <li style={{ listStyleType: "disc" }}>Buyer</li>
            <li style={{ listStyleType: "disc" }}>Interim Manager</li>
          </ul>
        </div>
        <div className="lg:w-[673px]">
          <motion.img
            src={imageUrl4}
            alt="placeholder"
            className="w-full h-auto"
            initial="hidden"
            animate={fourthSectionControls}
            variants={variants}
          />
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
