"use client";

import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  arrow?: boolean;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({ children, arrow = false, className = "", href, ...props }: ButtonProps) {
  // prefer global utility first so module can override specifics when needed
  const classNames = `u-btn ${styles.btn} ${className}`.trim();

  const arrowNode = (
    <span className={styles.arrow} aria-hidden>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );

  if (href) {
    // Render as anchor when href is provided
    const { onClick, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classNames} href={href} onClick={onClick} {...anchorProps}>
        <span className={styles.content}>{children}</span>
        {arrow && arrowNode}
      </a>
    );
  }

  return (
    <button className={classNames} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span className={styles.content}>{children}</span>
      {arrow && arrowNode}
    </button>
  );
}
