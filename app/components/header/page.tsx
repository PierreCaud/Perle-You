import React from "react";
import Header from "../../../components/Header";

export default function HeaderPreview() {
  return (
    <div>
      <h1>Header preview</h1>
      <p>This route shows the Header component in isolation for development.</p>
      <div style={{ height: 200 }} />
      <Header />
    </div>
  );
}
