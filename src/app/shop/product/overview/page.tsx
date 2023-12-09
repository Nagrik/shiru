"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Button from "@/components/common/Button";
import styles from "../../styles.module.scss";

function Page() {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.buttonsLines}>
        <Button onClick={() => push("/shop/product")}>Back to product</Button>
      </div>

      <div className={styles.product_info}>
        <div className={styles.product} onClick={() => push("/shop/product")} />
        <div className={styles.productInfo_container}>
          <div className={styles.product_name_title}>Name</div>
          <div className={styles.product_name_description}>T-shirt name</div>

          <div className={styles.product_name_title}>Price</div>
          <div className={styles.product_name_description}>$40</div>

          <div className={styles.product_name_title}>Count</div>
          <div className={styles.product_name_description}>20</div>
          <div className={styles.product_name_button}>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
