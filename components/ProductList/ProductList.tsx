"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductList.module.css";

type Product = {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
};

type ProductListProps = {
  products: Product[];
  selectedCategory: string;
  sortOption: string;
  isFilterVisible: boolean;
};

export default function ProductList({
  products,
  selectedCategory,
  sortOption,
  isFilterVisible,
}: ProductListProps) {

  // --------------------------------
  // FILTER PRODUCTS
  // --------------------------------

  let visibleProducts = products;

  if (selectedCategory !== "all") {
    visibleProducts = products.filter(
      (product) =>
        product.category === selectedCategory
    );
  }

  // --------------------------------
  // SORT PRODUCTS
  // --------------------------------

  if (sortOption === "low-high") {
    visibleProducts = [...visibleProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === "high-low") {
    visibleProducts = [...visibleProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <div
      className={`${styles.productGrid} ${
        !isFilterVisible
          ? styles.expanded
          : ""
      }`}
    >
      {visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}