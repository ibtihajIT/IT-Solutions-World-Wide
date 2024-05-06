import React from "react";
import SAP from "../components/job_pages/SAP";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function SCM() {
  return (
    <div>
      <Helmet>
        <title>SAP TM / SCM - Functional Consultant</title>
      </Helmet>
      <section>
        <SAP />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default SCM;
