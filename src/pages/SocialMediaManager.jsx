import React from "react";
import SocialMedia from "../components/job_pages/SocialMedia";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function SocialMediaManager() {
  return (
    <div>
      <Helmet>
        <title>Social Media Manager</title>
      </Helmet>
      <section>
        <SocialMedia />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default SocialMediaManager;
