import React from "react";
import SEOContent from "../components/job_pages/SEOContent";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function SEOContentWriter() {
  return (
    <div>
      <Helmet>
        <title>SEO Content Writer</title>
      </Helmet>
      <section>
        <SEOContent />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default SEOContentWriter;
