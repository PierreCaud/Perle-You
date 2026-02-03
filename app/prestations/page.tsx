import React, { JSX } from "react";
import styles from "./page.module.css";

const SERVICES = [
  {
    id: "modelages",
    title: "Modelages et soins du corps",
    image: "/images/pic01..jpg",
    description:
      "Offrez à votre corps une pause bien méritée avec nos modelages corporels, véritables moments de détente et de bien-être. Nos soins sont spécialement conçus pour libérer les tensions, améliorer la circulation sanguine et lymphatique et apporter une sensation de relaxation profonde. Chaque technique est adaptée à vos besoins spécifiques pour vous offrir une expérience unique et revitalisante, de 30 min à 2h ! Laissez-vous séduire par nos soins sur-mesure et redécouvrez l’harmonie entre votre corps et votre esprit. (gommages, enveloppements, modelages)."
  },
  {
    id: "soins-visage",
    title: "Soins du visage",
    image: "/images/pic02..jfif",
    description:
      "Votre peau mérite toute notre attention avec nos soins du visage Thalac. Profitez d’une véritable parenthèse de bien-être, alliant l’expertise de la cosmétique marine à des formules d’exception reconnues pour leur efficacité. Chaque soin est conçu pour répondre aux besoins spécifiques de votre type de peau, afin d’offrir à la fois un moment de profonde détente et des résultats visibles, pour une peau sublimée et rééquilibrée."
  },
  {
    id: "epilations",
    title: "Épilations",
    image: "/images/pic03..jfif",
    description: "Découvrez l'expertise de nos épilations pour une peau lisse et douce. Réalisées à la cire hypoallergénique, elles sont pensées pour allier efficacité et confort absolu. Adaptées aux zones sensibles, nos épilations vous offrent un moment de soin tout en douceur, pour une peau nette, apaisée et parfaitement lisse."
  },
  {
    id: "onglerie",
    title: "Onglerie",
    image: "/images/pic04..jfif",
    description: "Chez Perle & You, nous vous proposons des prestations d’onglerie de qualité, adaptées à vos envies et à vos besoins. Que vous souhaitiez une manucure classique, une pose de vernis semi-permanent, ou encore des extensions d'ongles en gel ou en pose américaine (Gel x), nos professionnelles expérimentées sauront sublimer vos mains avec soin et précision. Nous utilisons des produits aux normes européennes et de haute qualité pour garantir des résultats nets et durables, tout en prenant soin de vos ongles."
  },
  {
    id: "beaute-regard",
    title: "Beauté du regard",
    image: "/images/pic06..webp",
    description: "Des prestations idéales pour apporter profondeur et harmonie au regard, tout en conservant un résultat élégant et naturel. Nos esthéticiennes vous garantissent des résultats précis et durables, adaptés à votre morphologie, pour un regard naturellement éclatant et parfaitement défini."
  },
];

export default async function PrestationsPage() {
  const BASE_CALENDLY = process.env.NEXT_PUBLIC_CALENDLY_URL;

  // (No slugify needed — we use scheduling_url or service.calendly)

  // fetch events from our API and group by color->category (server-side)
  let groupedElements: JSX.Element[] = [];
  let serviceEvents: Record<string, any[]> = {};
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/calendly`, { cache: "no-store", next: { revalidate: 0 } });
    let events: any[] = [];
    if (res.ok) {
      events = (await res.json()) as any[];

      const colorMap: Record<string, string> = {
        "#f8e436": "Épilations",
        "#8247f5": "Beauté du regard",
        "#ff758e": "Onglerie",
        "#0ae8f0": "Soins visage",
        "#ccf000": "Soins pieds",
        "#ff4f00": "Soins du corps Thalac",
        "#ffa600": "Modelage corps",
      };

      const categoryToServiceId: Record<string, string> = {
        "Épilations": "epilations",
        "Beauté du regard": "beaute-regard",
        "Onglerie": "onglerie",
        "Soins visage": "soins-visage",
        "Soins pieds": "modelages",
        "Soins du corps Thalac": "modelages",
        "Modelage corps": "modelages",
      };

      const grouped = events.reduce((acc: Record<string, { color: string; items: any[] }>, ev) => {
        const color = (ev.color ?? "").toLowerCase();
        const label = colorMap[color] ?? "Autres";
        if (!acc[label]) acc[label] = { color: ev.color ?? "#e5e7eb", items: [] };
        acc[label].items.push(ev);
        return acc;
      }, {} as Record<string, { color: string; items: any[] }>);

      // build service -> events map so we can replace static prices per service
      serviceEvents = {};
      for (const ev of events) {
        const color = ((ev.color ?? "") as string).toLowerCase();
        const label = colorMap[color] ?? "Autres";
        const sid = categoryToServiceId[label];
        if (sid) {
          if (!serviceEvents[sid]) serviceEvents[sid] = [];
          serviceEvents[sid].push(ev);
        }
      }

      groupedElements = Object.entries(grouped).map(([label, { color, items }]) => {
        const service = SERVICES.find((s) => s.id === categoryToServiceId[label]);
        return (
          <article key={label} className={styles.spot}>
            <div className={styles.imageLink} aria-hidden>
              <img src={service?.image ?? "/images/pic01..jpg"} alt={label} />
            </div>

            <div className={styles.content}>
              <header>
                <h3 className="u-section-title">{label}</h3>
              </header>

              <p>{service?.description ?? ""}</p>

              <div className={styles.prices}>
                {items.map((ev) => (
                  <a key={ev.scheduling_url} className={styles.priceLine} href={ev.scheduling_url} target="_blank" rel="noreferrer">
                    <div className={styles.priceTitle}>{ev.name}</div>
                    {ev.description && (
                      <div className={styles.priceDesc}>{ev.description}</div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </article>
        );
      });
    } else {
      groupedElements = [<p key="err">Calendly API error ({res.status})</p>];
    }
  } catch (err) {
    groupedElements = [<p key="err">Impossible de charger les prestations depuis Calendly.</p>];
  }

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
                Découvrez l'ensemble de nos prestations beauté et bien-être, 
                conçues pour répondre à vos besoins spécifiques et sublimer votre peau, votre corps et votre esprit. 
                Que vous souhaitiez un soin du visage, un modelage relaxant ou une épilation parfaite, 
                notre esthéticienne qualifiée est là pour vous offrir une expérience personnalisée et revitalisante.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
  <h2 className="u-section-title"  style={{ marginLeft: "3%" }}>Nos diff&eacute;rentes prestations</h2>

        <div className={styles.leadText}>
          <p className="lead">
            Chez Perle & You, nous proposons une large gamme de prestations pour sublimer votre beauté et vous offrir un moment de détente.
            Nos services incluent des <strong><a href="#soins-visage">soins du visage</a> </strong>,
            <strong><a href="#modelages">soins du corps</a> </strong>,
            des <strong> <a href="#onglerie">prestations d’onglerie</a> </strong> (manucure/ pédicure, vernis semi-permanent, extensions au gel,...),
            ainsi que des <strong><a href="#epilations">prestations d’épilation</a> </strong>.
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
                  {((serviceEvents && serviceEvents[s.id]) || []).length > 0 ? (
                    (serviceEvents[s.id] || []).map((ev) => (
                      <a key={ev.scheduling_url} className={styles.priceLine} href={ev.scheduling_url} target="_blank" rel="noreferrer">
                        <div className={styles.priceTitle}>{ev.name}</div>
                        {ev.description && <div className={styles.priceDesc} dangerouslySetInnerHTML={{ __html: ev.description }} />}
                      </a>
                    ))
                  ) : (
                    <a key="book" className={styles.priceLine} href={BASE_CALENDLY} target="_blank" rel="noreferrer">
                      <div className={styles.priceTitle}>Réserver</div>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


