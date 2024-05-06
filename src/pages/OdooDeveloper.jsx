import React from "react";
import Odoodev from "../components/job_pages/Odoodev";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function OdooDeveloper() {
  return (
    <div>
      <Helmet>
        <title>Odoo Developer</title>
      </Helmet>
      <section>
        <Odoodev />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default OdooDeveloper;
