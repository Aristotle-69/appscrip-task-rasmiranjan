"use client";

import styles from "./MainContent.module.css";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import ProductList from "@/components/ProductList/ProductList";
import type { Product } from "@/data/products";

type MainContentProps = {
  products: Product[];
  selectedCategory: string;
  sortOption: string;
  onCategoryChange: (category: string) => void;
  isFilterVisible: boolean;
};

export default function MainContent({
  products,
  selectedCategory,
  sortOption,
  onCategoryChange,
  isFilterVisible,
}: MainContentProps) {
  return (
    <section
      className={`${styles.mainContent} ${
        !isFilterVisible ? styles.fullWidth : ""
      }`}
    >
      {isFilterVisible && (
        <FilterSidebar
          onCategoryChange={onCategoryChange}
        />
      )}

      <section className={styles.productArea}>
        <ProductList
          products={products}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
          isFilterVisible={isFilterVisible}
        />
      </section>
    </section>
  );
}