import React from "react";
import Mosaic from "../components/Mosaic";
import Button from "../components/Button";

const ITEMS = [
  { title: "Modelages / Soins du Corps", subtitle: "De 30 min à 2 heures", image: "/images/pic01..jpg", overlayColor: "#80325da4", href: "/prestations#modelages" },
  { title: "Soins du Visage", subtitle: "Personnalisés selon vos besoins", image: "/images/pic02..jfif", overlayColor: "#5f1e1ea4", href: "/prestations#soins-visage" },
  { title: "Épilations", subtitle: "Cire classique ou orientale", image: "/images/pic03..jfif", overlayColor: "#ec8198a4" },
  { title: "Onglerie", subtitle: "Belle jusqu'au bout des ongles", image: "/images/pic04..jfif", overlayColor: "#e7b888a4" },
  { title: "Maquillage", subtitle: "Mettre des paillettes dans votre vie", image: "/images/pic05..jpg", overlayColor: "#64222da4" },
  { title: "Soins Spécifiques", subtitle: "Brow lift et lash lift", image: "/images/pic06..webp", overlayColor: "#80325da4" },
];

export default function Home() {
  return (
    <>
      {/* Banner with warm overlay (no blue) */}
      <section>
        <div className="container" style={{ padding: '6rem 1rem', color: 'var(--color-secondary)' }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 800 }}>Institut Perle et Douceur</h1>
          <p style={{ maxWidth: 720, marginTop: '1rem', color: 'rgba(255,255,255,0.95)' }}>
            Chez Perle et Douceur, &eacute;vadez-vous dans un univers de d&eacute;tente. Laissez-vous accompagner
            par nos professionnelles de la beaut&eacute; dans une bulle de bien-&ecirc;tre et de s&eacute;r&eacute;nit&eacute;.
          </p>
          <div style={{ marginTop: 18 }}>
            <Button href="/qui-sommes-nous">Qui sommes-nous ?</Button>
          </div>
        </div>
      </section>

      {/* Mosaic services */}
      <main>
        <section style={{ padding: '3rem 0' }}>
          <div className="container">
            <h2 style={{ marginBottom: 12 }}>Nos prestations</h2>
            <p style={{ marginTop: 0, marginBottom: 18, color: '#555' }}>
              D&eacute;couvrez une s&eacute;lection de nos services — cliquez pour en savoir plus.
            </p>
          </div>
          <Mosaic items={ITEMS} />
        </section>

        {/* Certifications */}
        <section style={{ padding: '2.5rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', textDecoration: 'underline', textUnderlineOffset: '8px', marginBottom: 12 }}>Certifications</h2>
            <p>
              Notre institut d&apos;esth&eacute;tique est fier de ses labels qualit&eacute;, garantissant ses formations et services.
              Ces labels attestent de notre engagement &agrave; offrir des prestations de haut niveau, alliant expertise,
              s&eacute;curit&eacute; et satisfaction client. Choisir notre institut, c&apos;est opter pour une exp&eacute;rience de qualit&eacute;, reconnue et fiable, qui vous permet de b&eacute;n&eacute;ficier des meilleures techniques et pratiques esth&eacute;tiques.
            </p>
            <div style={{ marginTop: 12 }}>
              <Button href="/qui-sommes-nous" arrow>En savoir plus</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
