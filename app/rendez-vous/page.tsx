import React from "react";
import styles from "./page.module.css";

interface CalendlyEvent {
  name: string;
  description: string | null;
  scheduling_url: string;
  duration: number;
  pooling_type: string | null;
  color?: string | null;
  slug?: string | null;
  uri?: string | null;
  position?: number | null;
  type?: string | null;
}

export default function RendezVousPage() {

  return (
    <main className="container">
      <section>
        <div className={styles.inner}>
          <header>
            <h1 className="u-heading">Prendre rendez-vous ?</h1>
          </header>

          <p>
            Chez Perle & You, bénéficiez d&apos;un service professionnel et de qualit&eacute;. Laissez-vous
            chouchouter par nos esth&eacute;ticiennes diplômées et plongez dans un univers de douceur. Nos soins
            exclusifs et personnalisés sauront vous d&eacute;tendre.
          </p>

          <p>
            Profitez d&apos;un institut certifi&eacute; Bio et Naturel pour prendre soin de votre peau tout en douceur.
            Notre certification Bio implique des produits écoresponsables de qualit&eacute; et adaptés à tout type de
            peau.
          </p>

          <p>Laissez-vous emporter dans l&apos;univers du bien-&ecirc;tre chez Perle & You!</p>

          <h3 className="u-subtitle">Remplissez le cadre en bas de page pour prendre rendez-vous</h3>

          <span className={`${styles.image} ${styles.main}`}>
            <img src="/images/presta.png" alt="" />
          </span>
        </div>
      </section>
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Prendre rendez-vous</h1>

      <p>
        Pour consulter les prestations et prendre rendez-vous par catégorie, rendez-vous sur la page
        <a href="/prestations" className="underline ml-2">Prestations</a>.
      </p>
    </div>
    </main>
  );
}

