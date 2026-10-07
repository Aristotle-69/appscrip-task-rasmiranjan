import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Top section */}
        <div className={styles.footerTop}>
          <section className={styles.newsletter}>
            <h2>BE THE FIRST TO KNOW</h2>

            <p>
              Sign up for updates from mettā muse.
            </p>

            <div className={styles.subscribe}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                aria-label="Email address"
              />

              <button type="button">
                SUBSCRIBE
              </button>
            </div>
          </section>

          <section className={styles.contact}>
            <h2>CONTACT US</h2>

            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <h2 className={styles.currencyTitle}>
              CURRENCY
            </h2>

            <div className={styles.currency}>
              <span className={styles.flag}>🇺🇸</span>
              <span>USD</span>
            </div>

            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a
              currency reference is available on hover.
            </p>
          </section>
        </div>

        <div className={styles.divider} />

        {/* Bottom section */}
        <div className={styles.footerBottom}>
          <section className={styles.brandColumn}>
            <h2>mettā muse</h2>

            <a href="#">About Us</a>
            <a href="#">Stories</a>
            <a href="#">Artisans</a>
            <a href="#">Boutiques</a>
            <a href="#">Contact Us</a>
            <a href="#">EU Compliances Docs</a>
          </section>

          <section className={styles.linksColumn}>
            <h2>QUICK LINKS</h2>

            <a href="#">Orders &amp; Shipping</a>
            <a href="#">Join/Login as a Seller</a>
            <a href="#">Payment &amp; Pricing</a>
            <a href="#">Return &amp; Refunds</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </section>

          <section className={styles.socialColumn}>
            <h2>FOLLOW US</h2>

            <div className={styles.socialIcons}>
              <a
                href="#"
                aria-label="Instagram"
                className={styles.socialIcon}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="17.3"
                    cy="6.8"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className={styles.socialIcon}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M7 10v7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="7"
                    cy="7"
                    r="1"
                    fill="currentColor"
                  />
                  <path
                    d="M11 17v-4c0-2 1-3 3-3s3 1 3 3v4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M11 10v7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </a>
            </div>

            <h2 className={styles.acceptTitle}>
              mettā muse ACCEPTS
            </h2>

            <div className={styles.paymentMethods}>
              <span>G Pay</span>
              <span className={styles.mastercard}>
                ●●
              </span>
              <span className={styles.paypal}>
                P
              </span>
              <span className={styles.amex}>
                AMEX
              </span>
              <span> Pay</span>
              <span className={styles.gpayPurple}>
                P Pay
              </span>
            </div>
          </section>
        </div>

        <p className={styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}