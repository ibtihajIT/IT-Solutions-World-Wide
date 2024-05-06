import React from "react";
import ContentWrit from "../components/job_pages/ContentWrit";
import { Helmet } from "react-helmet";
import ApplyButton from "../components/job_pages/ApplyButton";

function ContentWriter() {
  return (
    <div>
      <Helmet>
        <title>Content Writer</title>
      </Helmet>
      <section>
        <ContentWrit />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default ContentWriter;
