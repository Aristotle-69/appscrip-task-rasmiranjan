"use client";

import { useState } from "react";
import styles from "./ProductCard.module.css";

type Product = {
  id: number;
  title: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  function toggleWishlist() {
    setIsWishlisted((current) => !current);
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className={styles.info}>
        <h2>{product.title}</h2>

        <div className={styles.pricing}>
          <a
            href="#"
            className={styles.pricingLink}
          >
            Sign in or Create an account to see pricing
          </a>

          <button
            type="button"
            aria-label={
              isWishlisted
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
            aria-pressed={isWishlisted}
            className={
              isWishlisted
                ? styles.wishlistActive
                : ""
            }
            onClick={toggleWishlist}
          >
            {isWishlisted ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}