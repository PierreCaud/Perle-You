import React from "react";
import Footer from "../../../components/Footer";

export default function FooterPreview() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Footer preview</h1>
      <p>This route shows the Footer component in isolation for development.</p>
      <div style={{ height: 400 }} />
      <Footer />
    </div>
  );
}
