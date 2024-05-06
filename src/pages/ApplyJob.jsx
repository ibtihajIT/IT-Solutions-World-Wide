import React from "react";
import ApplyNowForm from "../components/apply/Apply";
import { Helmet } from "react-helmet";
function ApplyJob() {
  return (
    <div>
      <Helmet>
        <title>Apply</title>
        <meta name="description" content="Join Our Team and Shape the Future" />
      </Helmet>
      <section>
        <ApplyNowForm />
      </section>
    </div>
  );
}

export default ApplyJob;
