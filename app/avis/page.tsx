import React from "react";
import styles from "./page.module.css";

export default function AvisPage() {
  return (
    <main>
      <section className={`container ${styles.section}`}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h1 className="u-heading">Avis</h1>
            <p className="muted">Retrouvez les avis laissés par nos clientes et clients.</p>
          </header>

          <div className={styles.grid}>
            <div>
              <p>Si vous souhaitez laisser un avis, vous pouvez le faire directement sur notre fiche Google.</p>
              <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5150.897562245427!2d4.714702!3d49.79643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea0f091cce7fbb%3A0xe6c6cdb3b966a495!2sInstitut%20Perle%20%26%20You%20(sur%20rdv%20uniquement)!5e0!3m2!1sfr!2sfr!4v1770131945168!5m2!1sfr!2sfr" width="800" height="600"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </p>
              <h2 className={styles.lead}>Ci-dessous quelques avis clientèle.</h2>
            </div>
          </div>

            <div className={styles.grid}>
            <ul className={styles.reviewsList}>
              <li className={styles.heroQuote}>
                <h3 className={styles.reviewAuthor}>Aaliyah L. <span className={styles.rating}>⭐⭐⭐⭐⭐</span></h3>
                <p className={styles.reviewText}>
                  Je vais souvent dans cet institut pour les ongles et l’épilation, et je recommande vraiment Perle. Elle est douce, à l’écoute et très professionnelle. Les ongles sont toujours magnifiques, le travail est soigné et tient dans le temps. L’épilation est faite avec beaucoup de délicatesse. On se sent à l’aise du début à la fin. Un vrai moment de bien-être à chaque rendez-vous ! 💅
                </p>
                <p className={styles.services}><strong>Services:</strong> Épilation à la cire, Manucure</p>
              </li>

              <li className={styles.heroQuote}>
                <h3 className={styles.reviewAuthor}>Anne-Marie D. <span className={styles.rating}>⭐⭐⭐⭐⭐</span></h3>
                <p className={styles.reviewText}>
                  Esthéticienne super ! Je recommande l'institut sans hésiter, rendez-vous rapides et répondant pleinement à mes attentes. Un grand merci à Perle pour son professionnalisme !
                </p>
                <p className={styles.services}><strong>Services:</strong> Épilation à la cire, Manucure</p>
              </li>

              <li className={styles.heroQuote}>
                <h3 className={styles.reviewAuthor}>Chloé H. <span className={styles.rating}>⭐⭐⭐⭐⭐</span></h3>
                <p className={styles.reviewText}>
                  Un super accueil dans un lieu très chaleureux, Perle est à l'écoute de nos besoins. Chaque moment passé à l'institut est une bulle de douceur — ne réfléchissez plus, foncez chez Perle & You.
                </p>
                <p className={styles.services}><strong>Services:</strong> Épilation à la cire, Massage</p>
              </li>
            </ul>
            </div>
        </div>
      </section>
    </main>
  );
}
