"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import styles from "./styles.module.scss";
import Button from "@/components/common/Button";
import Shop from "@/components/Home/Shop";

function Index() {
  const { push } = useRouter();
  return (
    <div className={styles.home_container}>
      <Header />
      <div className={styles.add_line}>
        <h1>Your shops</h1>
        <div>
          <Button onClick={() => push("/create-shop")}>Add shop</Button>
        </div>
      </div>
      <div onClick={() => push("/shop")}>
        <Shop />
      </div>
    </div>
  );
}

export default Index;
