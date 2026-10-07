import styles from "./ProductControls.module.css";

type ProductControlsProps = {
  onSortChange: (sortOption: string) => void;
  onFilterToggle: () => void;
  isFilterVisible: boolean;
};

export default function ProductControls({
  onSortChange,
  onFilterToggle,
  isFilterVisible,
}: ProductControlsProps) {
  return (
    <section className={styles.controls}>
      <div className={styles.leftControls}>
        <span className={styles.itemCount}>3425 ITEMS</span>

        <button
          className={styles.filterButton}
          onClick={onFilterToggle}
        >
          <span>{isFilterVisible ? "‹" : "›"}</span>

          {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <select
        className={styles.sortButton}
        defaultValue="recommended"
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="recommended">RECOMMENDED</option>
        <option value="low-high">PRICE: LOW TO HIGH</option>
        <option value="high-low">PRICE: HIGH TO LOW</option>
      </select>
    </section>
  );
}