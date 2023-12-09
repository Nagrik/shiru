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
        <Button onClick={() => push("/shop")}>Back to shop</Button>
        <div className={styles.buttons}>
          <Button onClick={() => push("/shop/category/overview")}>
            Category overview
          </Button>
        </div>
      </div>

      <div className={styles.products_edit}>
        <div className={styles.product}>
          <div className={styles.productInfo} />
        </div>
        <div className={styles.category_name}>Name: T-shirt</div>
        <div className={styles.button}>
          <Button>Edit</Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
