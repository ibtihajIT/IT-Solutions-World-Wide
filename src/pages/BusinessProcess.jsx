import React from "react";
import Business from "../components/job_pages/Business";
import { Helmet } from "react-helmet";
import ApplyButton from "../components/job_pages/ApplyButton";

function BusinessProcess() {
  return (
    <div>
      <Helmet>
        <title>Business Process Architect - Logistics</title>
      </Helmet>
      <section>
        <Business />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default BusinessProcess;
