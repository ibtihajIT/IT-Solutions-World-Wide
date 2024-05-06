import React from "react";
import Oracle from "../components/job_pages/Oracle";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function OrcaleFusion() {
  return (
    <div>
      <Helmet>
        <title>Oracle Fusion - Functional Consultant</title>
      </Helmet>
      <section>
        <Oracle />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default OrcaleFusion;
