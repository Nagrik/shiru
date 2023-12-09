import TextInput from "@/components/common/Input/Input";
import styles from "./styles.module.scss";
import Button from "@/components/common/Button";

type Props = {
  setStep: (step: number) => void;
};
function Step2({ setStep }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Path to your shop</h1>
      <div className={styles.input}>
        <TextInput
          placeholder="https://www.shiru.io/shop/example"
          name="shopName"
        />
      </div>
      <Button onClick={() => setStep(3)}>Next</Button>
    </div>
  );
}

export default Step2;
