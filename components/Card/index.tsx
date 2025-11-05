"use client";

import React from "react";
import styles from "./Card.module.css";

type CardProps = {
  image?: string;
  overlayColor?: string; // CSS color for overlay (rgba preferred)
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Card({ image, overlayColor = "rgba(0,0,0,0.36)", title, subtitle, className = "", style = {} }: CardProps) {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLHeadingElement | null>(null);
  const [barWidth, setBarWidth] = React.useState<number>(50); // percent

  React.useLayoutEffect(() => {
    if (!cardRef.current || !titleRef.current) return;

    const compute = () => {
      const cardW = cardRef.current?.offsetWidth || 1;
      const titleW = titleRef.current?.offsetWidth || 0;
      const pct = (titleW / cardW) * 100 + 5; // title width percent + 5
      const value = Math.max(50, Math.min(100, Math.round(pct))); // clamp 50..100
      setBarWidth(value);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(cardRef.current);
    ro.observe(titleRef.current);
    window.addEventListener("load", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", compute);
    };
  }, []);

  const combinedStyle = {
    ...(style as React.CSSProperties),
    backgroundImage: image ? `url(${image})` : undefined,
    // CSS custom properties for overlay and bottom bar
    ["--overlay-color"]: overlayColor,
    ["--bar-w"]: `${barWidth}%`,
  } as React.CSSProperties;

  return (
    <div ref={cardRef} className={`${styles.card} ${className}`} style={combinedStyle}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h3 ref={titleRef} className={styles.title}>
          {title}
        </h3>

        <div className={styles.bottomBar} aria-hidden />

        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </div>
  );
}
