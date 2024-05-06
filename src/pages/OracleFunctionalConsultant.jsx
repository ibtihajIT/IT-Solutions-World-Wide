import React from "react";
import OFC from "../components/job_pages/OFC";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function OracleFunctionalConsultant() {
  return (
    <div>
      <Helmet>
        <title>Orcale Functional Consultant</title>
      </Helmet>
      <section>
        <OFC />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default OracleFunctionalConsultant;
