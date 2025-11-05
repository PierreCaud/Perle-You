import React from "react";
import styles from "./page.module.css";

const IMAGES = [
  "pic12.jpg",
  "pic19.jpg",
  "pic14.jpg",
  "pic15.jpg",
  "pic16.jpg",
  "pic17.jpg",
  "pic22.jpg",
  "pic23.jpg",
  "pic24.jpg",
  "pic18.jpg",
  "pic13.jpg",
  "pic20.jpg",
];

export default function NosPhotosPage() {
  return (
    <main>
      <section id="one" className="container" style={{ padding: "3rem 0" }}>
        <div className={styles.inner}>
          <header className={styles.major}>
            <h1 className="u-heading">Nos photos</h1>
          </header>

          <p className={styles.lead} style={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}>
            Voici quelques photos représentatives de notre travail et de l'ambiance du salon. Cliquez sur une image pour l'ouvrir dans un nouvel onglet si vous voulez la voir en grand.
          </p>

          <section id="two" className={styles.spotlights}>
            <div className={styles.boxAlt}>
              <div className={styles.row}>
                {IMAGES.map((img) => (
                  <div key={img} className={styles.col}>
                    <a href={`/images/${img}`} target="_blank" rel="noreferrer" className={styles.imageLink}>
                      <img src={`/images/${img}`} alt={img.replace(/\.[^.]+$/, "")} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
