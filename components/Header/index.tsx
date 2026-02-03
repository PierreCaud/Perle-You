"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    // prevent background scroll when menu is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={styles.siteHeader}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.siteTitle}>
            <Link href="/">PERLE & YOU</Link>
          </h1>

          <div className={styles.controls}>
            {/* desktop nav (visible on wide screens) */}
            <nav className={styles.siteNav} aria-label="Main navigation">
              <Link href="/prestations">Prestations</Link>
              <Link href="/qui-sommes-nous">Qui sommes nous</Link>
              <Link href="/nos-photos">Nos photos</Link>
              <Link href="/avis">Avis</Link>
            </nav>

            {/* burger / close button in same spot */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className={styles.burgerButton}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                /* close (X) icon */
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.burgerIcon}
                  aria-hidden
                >
                  <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                /* burger icon */
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.burgerIcon}
                  aria-hidden
                >
                  <rect width="20" height="2" rx="1" fill="currentColor" />
                  <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
                  <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full-page overlay menu (drops from top). Rendered after header so it overlays content. */}
      <div
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
      >
        <button
          className={styles.overlayCloseButton}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={styles.menuInner}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/" onClick={() => setOpen(false)}>
                Accueil
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/prestations" onClick={() => setOpen(false)}>
                Prestations
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/qui-sommes-nous" onClick={() => setOpen(false)}>
                Qui sommes nous
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/nos-photos" onClick={() => setOpen(false)}>
                Nos photos
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/avis" onClick={() => setOpen(false)}>
                Avis
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
