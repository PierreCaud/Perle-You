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

          <div className={styles.heroQuote}>
            <p className="lead">"Un accueil chaleureux et une équipe professionnelle ! Je suis ravie de ma prestation, les soins étaient adaptés à mes besoins et réalisés avec soin. L'institut est un véritable havre de paix, je recommande vivement !"</p>
          </div>

          <div className={styles.grid}>
            <div>
              <p>Si vous souhaitez laisser un avis, vous pouvez le faire directement sur notre fiche Google.</p>
              <p>
                <a href="https://maps.app.goo.gl/rfYqjVhqUMjFaqyE9" target="_blank" rel="noopener noreferrer">Voir la fiche Google</a>
              </p>
              <p className={styles.lead}>Ci-dessous quelques avis clientèle.</p>

              <div className={styles.reviews}>
                <h3 className="u-section-title">Avis clientèle</h3>
                <ul className={styles.reviewList}>
                  <li className={styles.reviewItem}><p className="lead">"Un accueil chaleureux et une équipe professionnelle ! Je suis ravie de ma prestation, les soins étaient adaptés à mes besoins et réalisés avec soin. L'institut est un véritable havre de paix, je recommande vivement !"</p></li>
                  <li className={styles.reviewItem}><p className="lead">"Une expérience magnifique à chaque visite ! Les esthéticiennes sont à l'écoute et très compétentes. Les produits utilisés sont de qualité et l'ambiance est toujours agréable. Je ne me lasse jamais de venir ici."</p></li>
                  <li className={styles.reviewItem}><p className="lead">"Un institut au top ! Le soin du visage que j'ai reçu a fait des merveilles sur ma peau. Les conseils personnalisés sont précieux et je ressors toujours détendue et radieuse. Je n'hésite pas à recommander cet endroit à toutes mes amies !"</p></li>
                  <li className={styles.reviewItem}><p className="lead">"Je suis venue pour un soin relaxant et je suis sortie complètement revitalisée ! Le personnel est super, très professionnel et accueillant. Le cadre est apaisant, je me suis sentie vraiment choyée. Je reviendrai sans hésiter !"</p></li>
                  <li className={styles.reviewItem}><p className="lead">"Un moment de pure détente ! J'ai opté pour un massage et des soins du corps, et je suis plus que satisfaite du résultat. L'équipe est très attentionnée et prend le temps de répondre à toutes mes questions. Je recommande cet institut à 100% !"</p></li>
                  <li className={styles.reviewItem}><p className="lead">"Un service impeccable à chaque visite ! L’équipe est toujours souriante, professionnelle et attentive à mes besoins. Les soins sont de qualité, et l’atmosphère est tellement apaisante. J'adore venir ici, c'est un vrai moment de plaisir !"</p></li>
                  <li className={styles.reviewItem}><p className="lead">"Cet institut est un véritable paradis pour se détendre ! Les soins sont réalisés avec une grande expertise et les résultats sont toujours au rendez-vous. Je suis ravie de l’accueil et de la qualité des services, je recommande à 100% !"</p></li>
                  <li className={styles.reviewItem}><p className="lead">"Une expérience exceptionnelle ! L’équipe est toujours à l'écoute et adapte les soins en fonction de mes besoins. Les produits utilisés sont de qualité et j’ai vu une réelle différence sur ma peau après seulement quelques séances. Je reviendrai régulièrement, c'est certain !"</p></li>
                  <li className={styles.reviewItem}><p className="lead">"Un institut que je recommande vivement ! Les esthéticiennes sont très professionnelles et chaleureuses, elles me mettent toujours à l'aise. L'endroit est agréable et les soins sont top. Je me sens toujours bien après chaque visite."</p></li>
                  <li className={styles.reviewItem}><p className="lead">"J'ai adoré mon soin du visage ! Ma peau n'a jamais été aussi éclatante et hydratée. L’équipe est compétente et sait vraiment ce dont ma peau a besoin. Le cadre est très agréable, parfait pour se détendre. Je reviendrai sans hésiter !"</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
