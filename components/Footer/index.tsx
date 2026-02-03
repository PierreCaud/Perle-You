"use client";

import React from "react";
import styles from "./Footer.module.css";
// ContactForm is intentionally not mounted here to avoid client-only mount in the footer for now

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.siteFooter}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.contact}>
            <h4>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:institut.perleandyou@gmail.com" className={styles.contactLink} aria-label="Envoyer un email">
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 6.5L12 13L21 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>institut.perleandyou@gmail.com</span>
                </a>
              </li>

              <li>
                <a href="tel:+33783104922" className={styles.contactLink} aria-label="Appeler">
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.72.37 1.78.82 2.95a1 1 0 0 1-.24 1L8.91 9.91a16 16 0 0 0 6.18 6.18l1.2-1.14a1 1 0 0 1 1-.24c1.17.45 2.23.7 2.95.82a1 1 0 0 1 .75 1V22z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>07 83 10 49 22</span>
                </a>
              </li>

              <li>
                <a href="https://maps.app.goo.gl/rfYqjVhqUMjFaqyE9" target="_blank" rel="noopener noreferrer" className={styles.contactLink} aria-label="Ouvrir dans Google Maps">
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" fill="currentColor" />
                  </svg>
                  <span>
                    Institut Perle & You
                    <br />
                    Allée des Bouleaux, 08000 Charleville-Mézières
                    <br />
                    FRANCE
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.rightCol}>
            {/* Small embedded Google Map (hidden on very small screens) */}
            <div className={styles.mapEmbed} aria-hidden>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659298.0587272118!2d3.5588836669921813!3d49.79766604866522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea0f091cce7fbb%3A0xe6c6cdb3b966a495!2sInstitut%20Perle%20%26%20You!5e0!3m2!1sfr!2sfr!4v1762341097425!5m2!1sfr!2sfr"
                title="Plan Institut Perle & You"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className={styles.socialRow}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3V2z" fill="currentColor" />
                </svg>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>

            <small className={styles.siteFooterSmall}>© {year} Perle & You</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
