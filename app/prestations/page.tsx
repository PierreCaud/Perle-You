import React from "react";
import Button from "../../components/Button";
import styles from "./page.module.css";

const SERVICES = [
  {
    id: "modelages",
    title: "Modelages et soins du corps",
    image: "/images/pic01..jpg",
    description:
      "Offrez à votre corps une pause bien méritée avec nos modelages corporels, véritables moments de détente et de bien-être. Nos soins sont spécialement conçus pour libérer les tensions, améliorer la circulation et apporter une sensation de relaxation profonde. Qu’il s’agisse d’un modelage aux huiles essentielles, d’un massage tonifiant ou d’une séance de relaxation, chaque technique est adaptée à vos besoins spécifiques pour vous offrir une expérience unique et revitalisante, de 30 min à 2h! Laissez-vous séduire par nos soins sur-mesure et redécouvrez l’harmonie entre votre corps et votre esprit. (gommage, enveloppement, modelage)",
    prices: [
      "Modelage corps 30 min : 28€",
      "Modelage corps 45 min : 40€",
      "Modelage corps 60 min : 50€",
      "Modelage corps 90 min : 70€",
      "Drainage: 28€",
      "Gommage dos ou jambes : 10€",
      "Gommage corps complet : 18€",
      "Soins du corps complet 90 min : 90€",
    ],
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_MODELAGES || process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/your-calendar/modelages",
  },
  {
    id: "soins-visage",
    title: "Soins du visage",
    image: "/images/pic02..jfif",
    description:
      "Votre peau mérite toute notre attention avec nos soins du visage personnalisés, conçus pour répondre aux besoins spécifiques de chaque type de peau. Que vous souhaitiez hydrater, revitaliser, purifier ou apaiser votre épiderme, nos esthéticiennes expérimentées utilisent des techniques et des produits de qualité professionnelle pour révéler l'éclat naturel de votre teint. Grâce à des soins sur-mesure, adaptés à vos attentes et à votre routine beauté, redonnez à votre peau toute sa fraîcheur et son éclat, tout en profitant d’un moment de relaxation et de bien-être absolu.",
    prices: [
      "Modelage simple 25 min : 20€",
      "Soin douceur éclat 30 min (démaquillage, gommage, masque) : 25€", 
      "Soin complet 60 min (démaquillage, gommage, modelage, masque) : 55€",

    ],
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_VISAGE || process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/your-calendar/soins-visage",
  },
  {
    id: "epilations",
    title: "Épilations",
    image: "/images/pic03..jfif",
    description: "Découvrez l'expertise de nos épilations pour une peau lisse et douce. Nous vous proposons une gamme de techniques d'épilation adaptées à vos besoins et à vos zones sensibles, en utilisant des produits de qualité pour un confort optimal. Que ce soit pour une épilation traditionnelle à la cire, une épilation du visage ou des zones plus spécifiques, notre équipe d'esthéticiennes veille à ce que chaque séance soit un moment agréable et efficace. Profitez d'une peau parfaitement épilée, sans irritation, pour une sensation de fraîcheur et de légèreté qui dure.",
    prices: [
      "Visage 1-3 zones : 5€",
      "Aisselles ou maillot simple : 8€",
      "Jambes complètes : 20€",
      "Maillot échancré : 14€",
      "Maillot intégral : 18€"
    ],
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_EPILATIONS || process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/your-calendar/epilations",
  },
  {
    id: "onglerie",
    title: "Onglerie",
    image: "/images/pic04..jfif",
    description: "Dans notre salon esthétique, nous vous proposons des prestations ongulaires de qualité, adaptées à vos envies et à vos besoins. Que vous souhaitiez une manucure classique, une pose de vernis semi-permanent, ou encore des extensions d'ongles en gel ou en acrylique, nos professionnelles expérimentées sauront sublimer vos mains avec soin et précision. Nous utilisons des produits de haute qualité pour garantir des résultats impeccables et durables, tout en prenant soin de vos ongles. Offrez-vous un moment de détente et de beauté avec nos soins ongulaires sur mesure !",
    prices: [
      "Manucure simple : 8€",
      "Vernis demi permanent mains : 20€",
      "Vernis demi permanent pieds : 15€",
      "Pose complète chablons gel : 30€",
      "Remplissage gel : 25€",
      "Pose américaine : 25€",
      "Option modelage mains ou pieds : 5€",
    ],
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_ONGLERIE || process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/your-calendar/onglerie",
  },
  {
    id: "maquillage",
    title: "Maquillage",
    image: "/images/pic05..jpg",
    description: "Dans notre salon esthétique, nous vous offrons des prestations de maquillage personnalisées pour sublimer votre beauté naturelle. Que ce soit pour un maquillage de jour subtil, un maquillage de soirée glamour ou pour un événement spécial, nos experts en maquillage sauront mettre en valeur vos traits avec des produits de qualité et des techniques professionnelles. Nous vous garantissons un maquillage impeccable, durable et adapté à vos préférences, pour que vous vous sentiez belle et confiante en toutes occasions.",
    prices: ["Evènement spécial (Mariage, ...)", "Maquillage de jour", "Maquillage de soirée"],
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_MAQUILLAGE || process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/your-calendar/maquillage",
  },
  {
    id: "soins-specifiques",
    title: "Soins spécifiques",
    image: "/images/pic06..webp",
    description: "Dans notre salon esthétique, nous proposons des prestations de teinture de cils et de sourcils, ainsi que des soins de brow lift et lash lift pour un regard intensément sublimé. La teinture permet d’intensifier la couleur de vos cils et sourcils, tandis que le brow lift et le lash lift offrent un effet de courbure et de volume naturel, pour un regard plus ouvert et structuré sans effort quotidien. Nos experts vous garantissent des résultats précis et durables, adaptés à votre morphologie, pour un regard naturellement éclatant et parfaitement défini.",
    prices: ["Teinture cils ou sourcils : 10€", "Brow lift : 50€", "Lash lift : 50€"],
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_SPECIFIQUES || process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/your-calendar/soins-specifiques",
  },
];

export default function PrestationsPage() {
  const BASE_CALENDLY = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-calendar";

  // slugify a price string into a URL-friendly token, e.g. "Modelage corps 30 min : 28€" -> "modelage-corps-30-min-28"
  const slugify = (str: string) =>
    str
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "") // remove accents
      .toLowerCase()
      .replace(/€/g, "euro")
      .replace(/[:\s]+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <main>
      {/* Banner: use the first service image as a large background */}
      <section
        className={styles.banner}
        style={{ backgroundImage: `url(${SERVICES[0].image})` }}
        aria-label="Bannière Prestations"
      >
        <div className="container">
          <div className={styles.bannerInner}>
            <header className={styles.major}>
              <h1 className="u-heading">Prestations</h1>
            </header>

            <div className={styles.bannerCopy}>
              <p className="muted">
                D&eacute;couvrez l&apos;ensemble de nos prestations beaut&eacute; et bien-&ecirc;tre, conçues pour r&eacute;pondre &agrave; vos besoins sp&eacute;cifiques et
                sublimer votre peau, votre corps et votre esprit. Que vous souhaitiez un soin du visage, un modelage relaxant ou une &eacute;pilation
                parfaite, notre &eacute;quipe d&apos;esth&eacute;ticiennes qualifi&eacute;es est l&agrave; pour vous offrir une exp&eacute;rience personnalis&eacute;e et revitalisante.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
  <h2 className="u-section-title"  style={{ marginLeft: "3%" }}>Nos diff&eacute;rentes prestations</h2>

        <div className={styles.leadText}>
          <p className="lead">
            Dans notre salon d&apos;esth&eacute;tique, nous proposons une large gamme de prestations pour sublimer votre beaut&eacute; et vous offrir un moment de
            d&eacute;tente. Nos services incluent des soins du visage et des soins du corps, des manucures et p&eacute;dicures, des prestations ongulaires (pose de
            gel, vernis semi-permanent, extensions), ainsi que des s&eacute;ances de maquillage personnalis&eacute;es.
          </p>
        </div>

        <div className={styles.list}>
          {SERVICES.map((s) => (
            <article id={s.id} key={s.id} className={styles.spot}>
              <div className={styles.imageLink} aria-hidden>
                  <img src={s.image} alt={s.title} />
                </div>

              <div className={styles.content}>
                <header>
                  <h3 className="u-section-title">{s.title}</h3>
                </header>
                <p>{s.description}</p>

                <div className={styles.prices}>
                  {s.prices.map((p) => {
                    const slug = slugify(p);
                    // build URL like: BASE_CALENDLY/<service-id>/<slug>
                    const url = `${BASE_CALENDLY.replace(/\/$/, "")}/${encodeURIComponent(s.id)}/${encodeURIComponent(slug)}`;
                    return (
                      <a key={p} className={styles.priceLine} href={url} target="_blank" rel="noreferrer">
                        {p}
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


