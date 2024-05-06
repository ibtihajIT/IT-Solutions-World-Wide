import React from "react";

const WorkflowComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl mb-8 text-center">
        <span className="text-[#278083] font-bold">
          THE IMPLEMENTATION JOURNEY
        </span>
      </h2>

      {/* First Row of Workflow Steps */}
      <div className="flex flex-wrap justify-center space-x-2 relative">
        <WorkflowStep>ASSESSMENT</WorkflowStep>
        <ArrowConnector direction="right" />
        <WorkflowStep>VENDOR SELECTION</WorkflowStep>
        <ArrowConnector direction="right" />
        <WorkflowStep>CUSTOMIZATION AND INTEGRATION</WorkflowStep>
        <ArrowConnector direction="right" />
        <WorkflowStep>DATA MIGRATION</WorkflowStep>
        <ArrowConnector direction="right" />
        <WorkflowStep>TEST</WorkflowStep>
      </div>

      {/* Second Row of Workflow Steps */}
      <div className="flex flex-wrap justify-center space-x-2 relative">
        <WorkflowStep>POST IMPLEMENTATION REVIEW</WorkflowStep>
        <ArrowConnector direction="left" />
        <WorkflowStep>MONITOR AND OPTIMIZE</WorkflowStep>
        <ArrowConnector direction="left" />
        <WorkflowStep>IMPLEMENT</WorkflowStep>
        <ArrowConnector direction="left" />
        <WorkflowStep>TRAIN</WorkflowStep>
        <ArrowConnector direction="left" />
        <WorkflowStep>DEPLOY</WorkflowStep>
      </div>
    </div>
  );
};

// Sub-component for each workflow step
const WorkflowStep = ({ children }) => {
  return <div className="p-2 border rounded-full">{children}</div>;
};

// Sub-component for arrow connectors
const ArrowConnector = ({ direction }) => {
  const arrowStyle = {
    width: "80px", // Adjust as needed based on your layout
    height: "20px", // Adjust as needed based on your layout
    marginTop: "5px", // Adjust vertical alignment
  };

  return (
    <div style={{ ...arrowStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ ...arrowStyle, minWidth: "80px" }} // Ensure arrow width matches step width
      >
        {direction === "right" && (
          <>
            <path d="M0 50 L80 50" stroke="black" strokeWidth="2" />
            <path d="M80 45 L90 50 L80 55" fill="black" />
          </>
        )}
        {direction === "left" && (
          <>
            <path d="M100 50 L20 50" stroke="black" strokeWidth="2" />
            <path d="M20 45 L10 50 L20 55" fill="black" />
          </>
        )}
        {direction === "horizontal" && (
          <>
            <path d="M40 50 L60 50" stroke="black" strokeWidth="2" />
            <path d="M60 45 L70 50 L60 55" fill="black" />
          </>
        )}
      </svg>
    </div>
  );
};

export default WorkflowComponent;
