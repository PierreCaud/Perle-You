import React from "react";
// Button and ContactForm are intentionally not imported here to avoid unused-import lint warnings
import styles from "./page.module.css";

export default function QuiSommesNousPage() {
  return (
    <main className="container">
      <section className={styles.hero}>
        <header className={styles.major}>
          <h1>Qui sommes nous ?</h1>
        </header>
      </section>

      <section className={styles.content}>
        <h2 className="u-section-title">Des services de qualité</h2>
        <p>
          Découvrez l'excellence de Perle & You, où chaque soin est une expérience unique dédiée à votre bien-être. Nos expertes passionnées utilisent des produits de qualité et des techniques innovantes pour sublimer votre beauté naturelle. Que ce soit pour un soin du visage, une manucure ou un massage relaxant, nous vous offrons un moment de détente et de revitalisation dans un cadre élégant et chaleureux.
          Les marques sélectionnées avec soin reflètent notre exigence de qualité et de sécurité. <strong>Thalac</strong> pour les soins du visage, reconnue pour son expertise en cosmétique marine ; <strong>M’Nails</strong>, <strong>Mavex</strong> et <strong>Canni</strong> pour la prothésie ongulaire et les soins des mains et pieds, garantissant performance et résultats durables ; et <strong>Perron Rigot</strong> pour l’épilation, reconnue pour la douceur et l’efficacité de ses cires, adaptées aux peaux sensibles. Chaque produit est choisi pour offrir efficacité, confort et une expérience sensorielle unique.
          Faites confiance à notre savoir-faire et offrez-vous le luxe d’une beauté sans compromis.

        </p>

        <h2 className="u-section-title">Des esthéticiennes qualifiées</h2>
        <div className={styles.row}>
          <div className={styles.imageWrap}>
            <img src="/images/0.jpg" alt="Esthéticienne" />
          </div>
          <div className={styles.text}>
            <p>
              Perle, fondatrice et esthéticienne diplômée d’un BTS Esthétique depuis 2024, vous accueille avec tout son savoir-faire. 
              Formée aux dernières techniques et aux soins les plus innovants, je met un point d’honneur à proposer des prestations personnalisées, adaptées à vos besoins spécifiques.
              Grâce à mon expertise et ma passion pour mon métier, je vous assure des résultats à la hauteur de vos attentes tout en veillant à votre confort et à votre satisfaction.

            </p>
          </div>
        </div>

        <h2 className="u-section-title">Locaux modernes et accueillants</h2>
        <div className={styles.row}>
          <div className={`${styles.imageWrap} ${styles.small}`}>
            <img src="/images/institut.jpg" alt="Institut" />
          </div>
          <div className={styles.text}>
            <p>
              Notre institut de beauté vous accueille dans un cadre moderne et raffiné, où chaque détail a été pensé pour votre confort et votre bien-être. 
              Les locaux, à la fois spacieux et apaisants, offrent une atmosphère chaleureuse et élégante, idéale pour une parenthèse de détente. 
              Facilement accessible, l’institut dispose d’un stationnement pratique juste devant et se trouve à 5-10 minutes des arrêts de bus, pour un accès simple et confortable. 
              Venez profiter d’un lieu où détente et soins de qualité se conjuguent en toute sérénité.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
