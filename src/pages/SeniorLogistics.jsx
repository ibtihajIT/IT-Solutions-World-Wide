import React from "react";
import SeniorLog from "../components/job_pages/SeniorLog";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function SeniorLogistics() {
  return (
    <div>
      <Helmet>
        <title>Senior Logistics Engineer</title>
      </Helmet>
      <section>
        <SeniorLog />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default SeniorLogistics;
