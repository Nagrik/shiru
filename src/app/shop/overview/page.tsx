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

      <div className={styles.content}>
        <div className={styles.filters}>
          <div className={styles.filter_title}>Categories</div>
          <div className={styles.filter_list}>
            <ul>
              <li>T-shirt</li>
              <li>Hoodie</li>
              <li>Pants</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.product_overview}>
            <div className={styles.photo}>
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlWne_9RqgYLWACjHrNHqybrun4VUDmRKgu3x105vcG25NBSBYh2nwC-qZ0c55qpBEsoyAdRFOoCu-PBC6jiKKJK-E386KIDFBEdjFVrTDGl5fx8xT00KswA&usqp=CAE"
                alt=""
              />
            </div>
            <div className={styles.info}>t-shirt</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
