import React from "react";
import Odoofunctional from "../components/job_pages/Odoofunctional";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function Odoofunctionalconsultant() {
  return (
    <div>
      <Helmet>
        <title>Odoo Functional Consultant</title>
      </Helmet>
      <section>
        <Odoofunctional />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default Odoofunctionalconsultant;
