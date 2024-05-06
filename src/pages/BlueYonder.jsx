import React from "react";
import Blue from "../components/job_pages/Blue";
import { Helmet } from "react-helmet";
import ApplyButton from "../components/job_pages/ApplyButton";

function BlueYonder() {
  return (
    <div>
      <Helmet>
        <title>Blue Yonder WMS Dispatcher Engineer</title>
      </Helmet>
      <section>
        <Blue />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default BlueYonder;
