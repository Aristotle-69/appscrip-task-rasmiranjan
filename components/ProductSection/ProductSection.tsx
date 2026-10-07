"use client";

import { useState } from "react";
import ProductControls from "@/components/ProductControls/ProductControls";
import MainContent from "@/components/MainContent/MainContent";
import type { Product } from "@/data/products";

type ProductSectionProps = {
  products: Product[];
};

export default function ProductSection({
  products,
}: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [sortOption, setSortOption] =
    useState("recommended");

  const [isFilterVisible, setIsFilterVisible] =
    useState(false);

  return (
    <>
      <ProductControls
        onSortChange={setSortOption}
        onFilterToggle={() =>
          setIsFilterVisible(!isFilterVisible)
        }
        isFilterVisible={isFilterVisible}
      />

      <MainContent
        products={products}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        onCategoryChange={setSelectedCategory}
        isFilterVisible={isFilterVisible}
      />
    </>
  );
}