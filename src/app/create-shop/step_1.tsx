import TextInput from "@/components/common/Input/Input";
import styles from "./styles.module.scss";
import Button from "@/components/common/Button";

type Props = {
  setStep: (step: number) => void;
};
function Step1({ setStep }: Props) {
  return (
    <div className={styles.container}>
      <h1>Enter your new shop name </h1>
      <div className={styles.input}>
        <TextInput name="shopName" />
      </div>
      <Button onClick={() => setStep(2)}>Next</Button>
    </div>
  );
}

export default Step1;
