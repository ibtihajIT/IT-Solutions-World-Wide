import React from "react";
import DataAnalyst from "../components/job_pages/DataAnalyst";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function DataAna() {
  return (
    <div>
      <Helmet>
        <title>Data Analyst</title>
      </Helmet>
      <section>
        <DataAnalyst />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default DataAna;
