import React from "react";
import SAPBI from "../components/job_pages/SAPBi";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function SAPBIConsultant() {
  return (
    <div>
      <Helmet>
        <title>SAP BI Consultant</title>
      </Helmet>
      <section>
        <SAPBI />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default SAPBIConsultant;
