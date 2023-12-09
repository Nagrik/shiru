"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Button from "@/components/common/Button";
import styles from "./styles.module.scss";

function Page() {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.buttonsLines}>
        <Button>Back to shops</Button>
        <div className={styles.buttons}>
          <Button>Enable</Button>
          <Button onClick={() => push("/shop/settings")}>Shop settings</Button>
        </div>
      </div>

      <div className={styles.shopSettings}>
        <div className={styles.categories}>
          <span>Categories:</span>
          <Button>add category</Button>
        </div>
        <div>
          <Button onClick={() => push("/shop/overview")}>Shop overview</Button>
        </div>
      </div>

      <div className={styles.products}>
        <div className={styles.product} onClick={() => push("/shop/category")}>
          <span>T-shirt</span>
          <div className={styles.productInfo}>
            products: <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
