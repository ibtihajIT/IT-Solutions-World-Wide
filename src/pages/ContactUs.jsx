import React from "react";
import Header from "../components/Header";
import Welcome from "../components/contact_us/Welcome";
import ContactForm from "../components/contact_us/ContactForm";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Cont() {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="We're just a click away! Contact us for immediate assistance."
        />
      </Helmet>
      <section>
        <Header />
      </section>
      <section>
        <Welcome />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Cont;
