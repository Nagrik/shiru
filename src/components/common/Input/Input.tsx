"use client";

import { InputHTMLAttributes, useState } from "react";
import styles from "./styles.module.scss";
import EyeCloseIcon from "../../../../public/assets/icons/EyeClose";
import EyeIcon from "../../../../public/assets/icons/Eye";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  passwordInput?: boolean;
}

enum InputType {
  TEXT = "text",
  PASSWORD = "password",
}
function TextInput(props: Props) {
  const { passwordInput, name, placeholder } = props;
  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div>
      {passwordInput ? (
        <div className={styles.password_input}>
          <input
            className={styles.input}
            placeholder={placeholder}
            name={name}
            type={isShowPassword ? InputType.TEXT : InputType.PASSWORD}
          />
          <button
            type="button"
            className={styles.eye}
            onClick={() => setShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <EyeCloseIcon /> : <EyeIcon />}
          </button>
        </div>
      ) : (
        <div className={styles.input_wrapper}>
          <input
            className={styles.input}
            placeholder={placeholder}
            name={name}
            type="text"
          />
        </div>
      )}
    </div>
  );
}

export default TextInput;
