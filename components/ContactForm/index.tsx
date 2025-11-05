"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ endpoint }: { endpoint?: string }) {
  // endpoint can be provided via prop or env NEXT_PUBLIC_FORMSPREE_ENDPOINT
  const envEndpoint = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT as string | undefined) : undefined;
  const action = endpoint || envEndpoint || "https://formspree.io/f/yourFormId"; // replace with your Formspree form id

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <label className={styles.field}>
        <span className={styles.label}>Nom</span>
        <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Email *</span>
        <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" type="email" required />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Message *</span>
        <textarea className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message" required />
      </label>

      <div className={styles.actions}>
        <button type="submit" className={`u-btn ${styles.button}`} disabled={status === "sending"}>
          {status === "sending" ? "Envoi…" : "Envoyer"}
        </button>
  {status === "success" && <span className={styles.success}>Merci — message envoy&eacute;.</span>}
  {status === "error" && <span className={styles.error}>Erreur lors de l&apos;envoi. V&eacute;rifiez les champs ou essayez plus tard.</span>}
      </div>
    </form>
  );
}
