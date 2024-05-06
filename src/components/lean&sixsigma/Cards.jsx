import React from "react";

const Cards = () => {
  return (
    <div className="container py-6 md:py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#278083]">
        FOCUS
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-8 px-4">
        <div className="w-full md:w-1/2">
          <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
            <h3 className="text-lg font-bold text-center mb-2 text-[#278083]">
              Lean
            </h3>
            <h4 className="text-lg font-semibold mb-2 text-[#278083]">
              Primary Focus
            </h4>
            <p>Lean concentrates on eradicating waste.</p>
            <h4 className="text-lg font-semibold mb-2 text-[#278083]">Goal</h4>
            <p>
              optimizing processes to enhance customer value while conserving
              resources.
            </p>
            <h4 className="text-lg font-semibold mb-2 text-[#278083]">
              Key Concepts
            </h4>
            <p>
              Key Lean concepts encompass value stream mapping, 5S (Sort, Set in
              order, Shine, Standardize, Sustain), Kanban, and Just-in-Time
              (JIT) production.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-center text-[#278083]">
              Six Sigma
            </h3>
            <h4 className="text-lg font-semibold mb-2 text-[#278083]">
              Primary Focus
            </h4>
            <p>
              Six Sigma targets reducing variation and defects in processes.
            </p>
            <h4 className="text-lg font-semibold mb-2 text-[#278083]">Goal</h4>
            <p>To achieve near-perfect quality.</p>
            <h4 className="text-lg font-semibold mb-2 text-[#278083]">
              Key Concepts
            </h4>
            <p>
              Its core principles involve the DMAIC (Define, Measure, Analyze,
              Improve, Control) methodology and statistical tools for process
              capability analysis.
            </p>
          </div>
        </div>
      </div>
      {/* Methodologies */}
      <div className="container mx-auto py-6 md:py-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#278083]">
          Methodologies
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4">
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h3 className="text-lg font-bold text-center mb-2 text-[#278083]">
                Lean
              </h3>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Methodology
              </h4>
              <p>Lean concentrates on eradicating waste </p>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Approach
              </h4>
              <p>
                Embody a flexible approach with a focus on swift implementation
                of changes, often involving employee engagement and visible
                enhancements.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-center text-[#278083]">
                Six Sigma
              </h3>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Methodology
              </h4>
              <p>
                In contrast, Six Sigma adopts a structured, data-driven
                methodology relying heavily on statistical analysis.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Approach
              </h4>
              <p>
                Its systematic approach through DMAIC emphasizes measurement and
                quantifiable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* TOOLS AND TECHNIQUES */}
      <div className="container mx-auto py-6 md:py-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#278083]">
          TOOLS AND TECHNIQUES
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4">
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h3 className="text-lg font-bold text-center mb-2 text-[#278083]">
                Lean
              </h3>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Tools
              </h4>
              <p>
                Lean employs tools like value stream mapping, 5S, Kaizen events,
                Kanban, Poka-Yoke, and visual management.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Emphasis
              </h4>
              <p>
                To pinpoint and eliminate waste, enhance flow, and optimize
                processes.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-center text-[#278083]">
                Six Sigma
              </h3>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Tools
              </h4>
              <p>
                On the other hand, Six Sigma utilizes statistical tools such as
                control charts, histograms, regression analysis, and hypothesis
                testing.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Emphasis
              </h4>
              <p>
                Sto analyze data, measure performance, and identify root causes
                of defects.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* APPLICATION */}
      <div className="container mx-auto py-6 md:py-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#278083]">
          APPLICATION
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4">
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h3 className="text-lg font-bold text-center mb-2 text-[#278083]">
                Lean
              </h3>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Industry Focus
              </h4>
              <p>
                Initially linked with manufacturing, Lean now pervades
                industries like healthcare, services, and software development.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Situations
              </h4>
              <p>
                It thrives where visible inefficiencies and waste hinder
                processes.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-center text-[#278083]">
                Six Sigma
              </h3>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Industry Focus
              </h4>
              <p>
                Initially developed in manufacturing but has been successfully
                applied in diverse industries including healthcare, finance, and
                telecommunications.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Situations
              </h4>
              <p>
                Particularly effective in situations where there is a need to
                reduce variation and defects in a process.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* PHILOSOPHY */}
      <div className="container mx-auto py-6 md:py-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#278083]">
          PHILOSOPHY
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4">
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h3 className="text-lg font-bold text-center mb-2 text-[#278083]">
                Lean
              </h3>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Philosophy
              </h4>
              <p>
                Lean embodies a philosophy of continuous improvement and waste
                reduction
              </p>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Approach
              </h4>
              <p>
                Fostering a culture centered on eliminating non-value-added
                activities.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-center text-[#278083]">
                Six Sigma
              </h3>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Philosophy
              </h4>
              <p>
                Contrarily, Six Sigma aims for sustained process quality by
                minimizing defects.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Approach
              </h4>
              <p>
                Promoting a culture of data-driven decision-making and
                continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Opt for Lean and Six Sigma Methodologies? */}
      <div className="container mx-auto py-6 md:py-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#278083]">
          Why Opt for Lean and Six Sigma Methodologies?
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4">
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Achieve Operational Excellence
              </h4>
              <p>
                Lean and Six Sigma methodologies offer a robust framework for
                identifying and eliminating inefficiencies, paving the way for
                operational excellence. Our solutions empower organizations to
                optimize processes, resulting in enhanced customer satisfaction
                and augmented profitability.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Cost Reduction and Profitability Enhancement
              </h4>
              <p>
                Through waste elimination and defect minimization, Lean and Six
                Sigma drive significant cost savings. Our team collaborates
                closely with yours to pinpoint cost drivers, implement
                streamlined processes, and bolster overall cost-effectiveness
              </p>
            </div>
          </div>
        </div>
        {/* Additional Boxes */}
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4 py-6">
          <div className="w-full md:w-[46vw] md:max-w-[610px]">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Elevate Product and Service Quality
              </h4>
              <p>
                Quality lies at the heart of Lean and Six Sigma approaches. We
                aid organizations in delivering products and services that
                consistently surpass customer expectations. Leveraging rigorous
                analysis and improvement initiatives, we facilitate the
                attainment and sustenance of high-quality standards
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Comprehensive Lean and Six Sigma Services */}
      <div className="container mx-auto py-6 md:py-0">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#278083]">
          Our Comprehensive Lean and Six Sigma Services
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4">
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Lean Implementation Expertise
              </h4>
              <p>
                Our adept Lean specialist’s partner with your team to identify
                and eradicate non-value-added activities, trim lead times, and
                enhance overall process efficiency. From value stream mapping to
                seamless 5S implementation, our tailored approach aligns with
                your organization's distinct requirements.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Six Sigma Deployment Excellence
              </h4>
              <p>
                Our Six Sigma services centre on data-driven decision-making and
                statistical analysis to pinpoint and rectify process defects. We
                adeptly guide your team through the DMAIC (Define, Measure,
                Analyse, Improve, Control) methodology, ensuring sustainable
                process enhancements.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 px-4 py-14">
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Tailored Training Programs
              </h4>
              <p>
                Empower your team with the requisite skills and knowledge to
                spearhead Lean and Six Sigma initiatives. Our customized
                training regimens encompass an array of subjects, ranging from
                fundamental Lean principles to advanced Six Sigma methodologies,
                equipping your team for triumph.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#d4e6e6] shadow-md p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-[#278083]">
                Sustained Support and Continuous Advancement
              </h4>
              <p>
                At IT Solutions Worldwide, we foster a culture of continual
                improvement. Our support extends beyond mere implementation; we
                offer ongoing guidance, monitoring, and refinement, safeguarding
                your organization's enduring success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-base lg:text-lg font-normal mb-4 text-center">
        Incorporating Lean Six Sigma Process Improvement Tools and Techniques,
        Lean Six Sigma and Project Management, along with Lean and Six Sigma
        methodologies, our solutions epitomize excellence in operational
        enhancement
      </p>
    </div>
  );
};

export default Cards;
