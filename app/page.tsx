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
          <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 800 }}>Institut Perle & You</h1>
          <p style={{ maxWidth: 720, marginTop: '1rem', color: 'rgba(255,255,255,0.95)' }}>
            Chez Perle & You, révélez la perle rare cachée en vous. Laissez-vous accompagner par nos professionnelles de la beauté dans une bulle de bien-être et de sérénité pour un moment pensé rien que pour vous.
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

        {/* NOS ENGAGEMENTS */}
        <section style={{ padding: '2.5rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', textDecoration: 'underline', textUnderlineOffset: '8px', marginBottom: 12 }}>NOS ENGAGEMENTS</h2>
            <p>
              Notre institut d'esthétique est fier de vous garantir la qualité de ses formations et services. La qualité des prestations repose sur une sélection rigoureuse de produits conformes aux normes européennes, et sur l’utilisation de marques françaises reconnues telles que <strong>Thalac</strong> et <strong>M’Nails</strong>. Les esthéticiennes sont formées aux protocoles professionnels et au strict respect des règles d’hygiène, afin de garantir des soins sûrs, maîtrisés et réalisés dans les meilleures conditions, pour une expérience en toute confiance.
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
