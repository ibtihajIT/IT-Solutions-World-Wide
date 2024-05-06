import React from "react";
import DataEntry from "../components/job_pages/DataEntry";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function DataEntryOperator() {
  return (
    <div>
      <Helmet>
        <title>Data Entry Operator</title>
      </Helmet>
      <section>
        <DataEntry />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default DataEntryOperator;
