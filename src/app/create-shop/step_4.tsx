import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import Button from "@/components/common/Button";

function Step4() {
  const { push } = useRouter();
  return (
    <div className={styles.step2}>
      <h1 className={styles.title_step3}>
        Your shop was successfully created!
      </h1>
      <h3>Your can add products and activate shop</h3>
      <div className={styles.step3}>
        <div className={styles.button}>
          <Button onClick={() => push("/")}>GO TO ADMIN PANEL</Button>
        </div>
      </div>
    </div>
  );
}

export default Step4;
