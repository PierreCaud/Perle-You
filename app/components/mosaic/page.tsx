import React from "react";
import Mosaic from "../../../components/Mosaic";

const SAMPLE = [
  { title: "Massage détente", subtitle: "60 min", image: "/file.svg", overlayColor: "rgba(0,0,0,0.25)" },
  { title: "Soin du visage", subtitle: "90 min", image: "/globe.svg", overlayColor: "rgba(0,0,0,0.25)" },
  { title: "Manucure", subtitle: "30 min", image: "/next.svg", overlayColor: "rgba(133, 54, 54, 0.25)" },
  { title: "Pédicure", subtitle: "45 min", image: "/vercel.svg", overlayColor: "rgba(0,0,0,0.25)" },
  { title: "Coiffure", subtitle: "50 min", image: "/window.svg", overlayColor: "rgba(0,0,0,0.25)" },
  { title: "Maquillage", subtitle: "40 min", image: "/file.svg", overlayColor: "rgba(0,0,0,0.25)" },
];

export default function Page() {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <h1 style={{ margin: 0, padding: "20px 16px" }}>Mosaic preview (full width)</h1>
      <Mosaic items={SAMPLE} />
    </div>
  );
}
