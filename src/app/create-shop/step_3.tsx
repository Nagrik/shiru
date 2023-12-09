import TextInput from "@/components/common/Input/Input";
import styles from "./styles.module.scss";
import Button from "@/components/common/Button";

type Props = {
  setStep: (step: number) => void;
};
function Step3({ setStep }: Props) {
  return (
    <div className={styles.step2}>
      <h1 className={styles.title_step3}>
        Do you want to enter social handle and link to your instagram shop
      </h1>
      <div className={styles.step3}>
        <div className={styles.input}>
          <div className={styles.line}>
            <div className={styles.line_title}>Social handle</div>
            <TextInput placeholder="@my_shop" name="social handle" />
          </div>
          <div className={styles.line}>
            <div className={styles.line_title}>Link</div>
            <TextInput
              placeholder="https://www.shiru.io/shop/example"
              name="link"
            />
          </div>
        </div>
        <div className={styles.button}>
          <Button onClick={() => setStep(4)}>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Step3;
