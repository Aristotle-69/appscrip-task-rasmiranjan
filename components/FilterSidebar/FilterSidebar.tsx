"use client";

import { useState } from "react";
import styles from "./FilterSidebar.module.css";

type FilterSidebarProps = {
  onCategoryChange: (category: string) => void;
};

const filters = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

const filterOptions: Record<string, string[]> = {
  "OCCASION": [
    "Casual",
    "Party",
    "Formal",
    "Wedding",
  ],

  "WORK": [
    "Office",
    "Business",
    "Outdoor",
    "Travel",
  ],

  "FABRIC": [
    "Cotton",
    "Silk",
    "Leather",
    "Denim",
  ],

  "SEGMENT": [
    "Premium",
    "Regular",
    "Luxury",
  ],

  "SUITABLE FOR": [
    "Daily Wear",
    "Special Occasion",
    "Travel",
  ],

  "RAW MATERIALS": [
    "Natural",
    "Synthetic",
    "Recycled",
  ],

  "PATTERN": [
    "Solid",
    "Printed",
    "Floral",
    "Striped",
  ],
};

export default function FilterSidebar({
  onCategoryChange,
}: FilterSidebarProps) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  function toggleFilter(filter: string) {
    setOpenFilter((current) =>
      current === filter ? null : filter
    );
  }

  return (
    <aside className={styles.sidebar}>
      {/* CUSTOMIZABLE */}
      <div className={styles.customizable}>
        <input
          type="checkbox"
          id="customizable"
        />

        <label htmlFor="customizable">
          CUSTOMIZABLE
        </label>
      </div>

      {/* FILTERS */}
      {filters.map((filter) => {
        const isOpen = openFilter === filter;

        return (
          <div
            className={styles.filterItem}
            key={filter}
          >
            <button
              type="button"
              className={styles.filterHeader}
              onClick={() => toggleFilter(filter)}
            >
              <span>{filter}</span>

              <span className={styles.arrow}>
                {isOpen ? "⌃" : "⌄"}
              </span>
            </button>

            {isOpen && (
              <div className={styles.filterOptions}>

                {/* CATEGORY FILTER */}
                {filter === "IDEAL FOR" && (
                  <>
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="all"
                        onChange={() =>
                          onCategoryChange("all")
                        }
                      />

                      <span>All</span>
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="men's clothing"
                        onChange={() =>
                          onCategoryChange("men's clothing")
                        }
                      />

                      <span>Men</span>
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="women's clothing"
                        onChange={() =>
                          onCategoryChange("women's clothing")
                        }
                      />

                      <span>Women</span>
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="jewelery"
                        onChange={() =>
                          onCategoryChange("jewelery")
                        }
                      />

                      <span>Jewellery</span>
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="electronics"
                        onChange={() =>
                          onCategoryChange("electronics")
                        }
                      />

                      <span>Electronics</span>
                    </label>
                  </>
                )}

                {/* OTHER FILTERS */}
                {filter !== "IDEAL FOR" &&
                  filterOptions[filter]?.map((option) => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        value={option}
                      />

                      <span>{option}</span>
                    </label>
                  ))}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}