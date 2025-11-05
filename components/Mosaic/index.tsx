"use client";

import React from "react";
import Link from "next/link";
import Card from "../Card";
import styles from "./Mosaic.module.css";

type Item = {
  title: string;
  subtitle?: string;
  image?: string;
  overlayColor?: string;
  /** optional explicit href for this tile (e.g. '/prestations#manucure') */
  href?: string;
};

export default function Mosaic({ items }: { items: Item[] }) {
  // split into rows of two
  const rows: Item[][] = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));

  return (
    <div className={styles.mosaic}>
      {rows.map((row, idx) => {
        const leftWide = idx % 2 === 0; // alternate: first row left wide
        return (
          <div key={idx} className={`${styles.row} ${leftWide ? styles.leftWide : styles.rightWide}`}>
            {row.map((it, j) => {
              const slugify = (str: string) =>
                str
                  .normalize("NFD") // separate accents from letters
                  .replace(/\p{Diacritic}/gu, "") // remove diacritics
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, "") // remove remaining invalid chars
                  .trim()
                  .replace(/\s+/g, "-");

              const href = it.href ? it.href : `/prestations#${slugify(it.title)}`;

              return (
                <Link
                  key={j}
                  href={href}
                  className={styles.cardLink}
                  aria-label={`Voir les prestations : ${it.title}`}
                >
                  <div className={styles.cardWrap}>
                    <Card image={it.image} overlayColor={it.overlayColor} title={it.title} subtitle={it.subtitle} />
                  </div>
                </Link>
              );
            })}
            {row.length === 1 ? (
              // fill second column with empty block so layout remains consistent
              <div className={styles.cardWrap} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
