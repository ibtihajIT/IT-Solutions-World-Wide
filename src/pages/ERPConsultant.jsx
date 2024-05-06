import React from "react";
import ERP from "../components/job_pages/ERP";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function ERPConsultant() {
  return (
    <div>
      <Helmet>
        <title>ERP Consultant</title>
      </Helmet>
      <section>
        <ERP />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default ERPConsultant;
