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
          <Button>Enable</Button>
          <Button>Shop overview</Button>
        </div>
      </div>

      <div className={styles.products}>
        <div className={styles.product} />
      </div>
      <div className={styles.productInfo}>
        <ul>
          <li>Name: </li>
          <li>Link: </li>
          <li>Social handle:</li>
          <li>Link to shop&apos;s instagram:</li>
        </ul>
        <Button>Edit</Button>
      </div>
    </div>
  );
}

export default Page;
