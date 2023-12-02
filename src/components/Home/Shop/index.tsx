import styles from "./styles.module.scss";

function Shop() {
  return (
    <div className={styles.shop}>
      <div>
        <ul className={styles.list}>
          <li className={styles.list_item}>shopName</li>
          <li className={styles.list_item}>shopLink</li>
          <li className={styles.list_item}>categories: 2</li>
          <li className={styles.list_item}>products: 12</li>
        </ul>
      </div>
      <div className={styles.status}>status here</div>
    </div>
  );
}

export default Shop;
