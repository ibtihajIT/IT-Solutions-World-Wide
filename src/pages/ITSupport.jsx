import React from "react";
import ITsup from "../components/job_pages/ITsup";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function ITSupport() {
  return (
    <div>
      <Helmet>
        <title>IT Support Specialist</title>
      </Helmet>
      <section>
        <ITsup />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default ITSupport;
