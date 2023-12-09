"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header";
import Button from "@/components/common/Button";
import styles from "../styles.module.scss";
import Checkbox from "@/components/common/Checkbox";

function Page() {
  const { push } = useRouter();
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.buttonsLines}>
        <Button onClick={() => push("/shop")}>Back to shop</Button>
      </div>

      <div className={styles.shopSettings}>
        <div className={styles.categories}>
          <span>Products:</span>
        </div>
        <div>
          <Button onClick={() => push("/shop/product/overview")}>
            Product overview
          </Button>
        </div>
      </div>

      <div className={styles.product_info}>
        <div className={styles.product} onClick={() => push("/shop/product")} />
        <div className={styles.productInfo_container}>
          <div className={styles.product_name_title}>Name</div>
          <div className={styles.product_name_description}>
            {edit ? (
              <input type="text" placeholder="T shirt name" />
            ) : (
              "T shirt name"
            )}
          </div>

          <div className={styles.product_name_title}>Price</div>
          <div className={styles.product_name_description}>
            {edit ? <input type="text" placeholder="$40" /> : "$40"}
          </div>

          <div className={styles.product_name_title}>Count</div>
          <div className={styles.product_name_description}>
            {edit ? <input type="text" placeholder="10" /> : "10"}
          </div>

          <div className={styles.product_name_checkbox}>
            Show counts for user <Checkbox />
          </div>
          <div className={styles.product_name_button}>
            <Button onClick={() => setEdit(!edit)}>Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
