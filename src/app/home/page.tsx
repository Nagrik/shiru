"use client";

import Header from "@/components/Header";
import styles from "./styles.module.scss";
import Button from "@/components/common/Button";
import Shop from "@/components/Home/Shop";

function Index() {
  return (
    <div className={styles.home_container}>
      <Header />
      <div className={styles.add_line}>
        <h1>Your shops</h1>
        <div>
          <Button>Add shop</Button>
        </div>
      </div>
      <Shop />
    </div>
  );
}

export default Index;
