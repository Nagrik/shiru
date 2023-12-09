"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Button from "@/components/common/Button";
import styles from "../styles.module.scss";

function Page() {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.buttonsLines}>
        <Button onClick={() => push("/shop")}>Back to shop</Button>
        <div className={styles.buttons}>
          <Button>Category overview</Button>
        </div>
      </div>

      <div className={styles.category}>Category: t-shirts</div>

      <div className={styles.shopSettings}>
        <div className={styles.categories}>
          <span>products:</span>
          <Button>Add product</Button>
        </div>
        <div>
          <Button onClick={() => push("/shop/category/edit")}>
            Edit category
          </Button>
        </div>
      </div>

      <div className={styles.products}>
        <div className={styles.product} onClick={() => push("/shop/product")}>
          <span>Product Name</span>
          <div className={styles.productInfo}>
            <span>10$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
