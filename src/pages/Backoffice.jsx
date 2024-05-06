import React from "react";
import Backoff from "../components/job_pages/Backoff";
import { Helmet } from "react-helmet";
import ApplyButton from "../components/job_pages/ApplyButton";

function Backoffice() {
  return (
    <div>
      <Helmet>
        <title>Back Office Assistant</title>
      </Helmet>
      <section>
        <Backoff />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default Backoffice;
