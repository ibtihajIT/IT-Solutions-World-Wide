import React from "react";
import Header from "../components/Header";
import Welcome from "../components/career/Welcome";
import Careerapply from "../components/career/Careerapply";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Career() {
  return (
    <div>
      <Helmet>
        <title>Career</title>
        <meta
          name="description"
          content="Our company is the epitome of technology and innovation. Our exceptional team is a testament to this. We recruit top-tier talent in the market and showcase their expertise in their respective domains. At IT Solutions Worldwide, subsisting is not the norm, we go all out. Join our team as a skilled individual seeking an exceptional work environment to grow and thrive."
        />
      </Helmet>
      <section>
        <Header />
      </section>
      <section>
        <Welcome />
      </section>
      <section>
        <Careerapply />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Career;
