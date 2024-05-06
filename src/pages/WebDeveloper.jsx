import React from "react";
import Webdev from "../components/job_pages/Webdev";
import ApplyButton from "../components/job_pages/ApplyButton";
import { Helmet } from "react-helmet";

function WebDeveloper() {
  return (
    <div>
      <Helmet>
        <title>Web Developer</title>
      </Helmet>
      <section>
        <Webdev />
      </section>
      <section>
        <ApplyButton />
      </section>
    </div>
  );
}

export default WebDeveloper;
