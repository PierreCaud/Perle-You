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
          D&eacute;couvrez l&apos;excellence de notre institut Perle & You, o&ugrave; chaque soin est une exp&eacute;rience unique d&eacute;di&eacute;e &agrave; votre bien-&ecirc;tre. Nos expertes
          passionn&eacute;es utilisent des produits de qualit&eacute; et des techniques innovantes pour sublimer votre beaut&eacute; naturelle. Que ce soit pour un soin
          du visage, une manucure ou un massage relaxant, nous vous offrons un moment de d&eacute;tente et de revitalisation dans un cadre &eacute;l&eacute;gant et
          chaleureux. Faites confiance &agrave; notre savoir-faire et offrez-vous le luxe d&rsquo;une beaut&eacute; sans compromis.
        </p>

        <h2 className="u-section-title">Des esthéticiennes qualifiées</h2>
        <div className={styles.row}>
          <div className={styles.imageWrap}>
            <img src="/images/0.jpg" alt="Esthéticienne" />
          </div>
          <div className={styles.text}>
            <p>
              Nos esth&eacute;ticiennes sont des professionnelles hautement qualifi&eacute;es, form&eacute;es aux derni&egrave;res techniques et aux soins les plus innovants. Avec
              une expertise approfondie et une passion pour leur m&eacute;tier, elles mettent un point d&apos;honneur &agrave; offrir des services personnalis&eacute;s et de
              qualit&eacute;, adapt&eacute;s &agrave; vos besoins sp&eacute;cifiques. Gr&acirc;ce &agrave; leur savoir-faire, elles garantissent des r&eacute;sultats exceptionnels tout en veillant &agrave;
              votre confort et votre satisfaction.
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
              Notre institut de beaut&eacute; vous accueille dans un cadre moderne et raffin&eacute;, o&ugrave; chaque d&eacute;tail a &eacute;t&eacute; pens&eacute; pour votre confort et votre
              bien-&ecirc;tre. Les locaux, &agrave; la fois spacieux et apaisants, offrent une atmosph&egrave;re chaleureuse et &eacute;l&eacute;gante, id&eacute;ale pour une parenth&egrave;se de
              d&eacute;tente. Venez d&eacute;couvrir un lieu o&ugrave; beaut&eacute; et bien-&ecirc;tre se rencontrent dans un cadre exceptionnel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
