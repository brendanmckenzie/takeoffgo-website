import React from "react";
import SectionHeader from "./SectionHeader";

const ContactInformation = ({ data }: any) => (
  <section id="contact" className="section container">
    <SectionHeader title="Contact information" />
    Your travel consultant is{" "}
    <strong>{(data.consultant.name || "").trim()}</strong>, feel free to contact{" "}
    {data.consultant.genderPreposition} at{" "}
    <a href={`mailto:${data.consultant.email}`}>{data.consultant.email}</a> or{" "}
    <a href={`tel:${data.consultant.phone.replace(/\s/g, "")}`}>
      {data.consultant.phone}
    </a>{" "}
    anytime.
  </section>
);

export default ContactInformation;
