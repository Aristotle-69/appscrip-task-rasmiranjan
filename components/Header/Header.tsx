"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.leftSection}>
          <img

    src="/Logo.svg"

    alt="metta muse logo"

    className={styles.logoIcon}

  />
        </div>

        <div className={styles.logo}>LOGO</div>

        <div className={styles.actions}>
          <button aria-label="Search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button aria-label="Wishlist">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 8.61C20.84 5.95 18.79 4 16.25 4C14.78 4 13.45 4.7 12.5 5.79C11.55 4.7 10.22 4 8.75 4C6.21 4 4.16 5.95 4.16 8.61C4.16 13.54 12.5 20 12.5 20C12.5 20 20.84 13.54 20.84 8.61Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button aria-label="Shopping bag">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8H19L20 21H4L5 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button aria-label="Profile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 21C5.5 16.8 8.1 14.5 12 14.5C15.9 14.5 18.5 16.8 19 21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button className={styles.language}>
            ENG
            <span>⌄</span>
          </button>
        </div>

        <button
          type="button"
          className={styles.mobileMenuButton}
          aria-label={
            isMobileMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={isMobileMenuOpen}
          onClick={() =>
            setIsMobileMenuOpen(
              (current) => !current
            )
          }
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileActions}>
          <button aria-label="Search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button aria-label="Wishlist">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 8.61C20.84 5.95 18.79 4 16.25 4C14.78 4 13.45 4.7 12.5 5.79C11.55 4.7 10.22 4 8.75 4C6.21 4 4.16 5.95 4.16 8.61C4.16 13.54 12.5 20 12.5 20C12.5 20 20.84 13.54 20.84 8.61Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button aria-label="Shopping bag">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8H19L20 21H4L5 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button aria-label="Profile">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 21C5.5 16.8 8.1 14.5 12 14.5C15.9 14.5 18.5 16.8 19 21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button className={styles.mobileLanguage}>
            ENG
          </button>
        </div>
      )}

      <nav className={styles.navigation}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}