"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import TextInput from "@/components/common/Input/Input";
import Button from "@/components/common/Button";
import InstagramIcon from "../../../public/assets/icons/Instagram";

enum UserTypes {
  SELLER = "seller",
  CUSTOMER = "customer",
}
function SignUp() {
  const [activeButton, setActiveButton] = useState<UserTypes>(UserTypes.SELLER);
  const { push } = useRouter();
  const changeButtonType = () => {
    if (activeButton === UserTypes.SELLER) {
      setActiveButton(UserTypes.CUSTOMER);
    } else {
      setActiveButton(UserTypes.SELLER);
    }
  };
  return (
    <div className={styles.container}>
      <h1>I want to be...</h1>
      <div className={styles.buttons}>
        <button
          type="button"
          className={
            activeButton === UserTypes.SELLER ? styles.active : styles.nonActive
          }
          onClick={changeButtonType}
        >
          Seller
        </button>
        <button
          type="button"
          className={
            activeButton === UserTypes.CUSTOMER
              ? styles.active
              : styles.nonActive
          }
          onClick={changeButtonType}
        >
          Customer
        </button>
      </div>
      <div className={styles.email_wrapper}>
        <TextInput placeholder="Email" name="email" />
      </div>
      <div className={styles.password_wrapper}>
        <TextInput placeholder="Password" name="password" passwordInput />
      </div>
      <Button onClick={() => push("/")}>LOGIN</Button>
      <span className={styles.or}>OR</span>
      <div className={styles.instagram}>
        <InstagramIcon />
      </div>
      <h3 className={styles.need}>
        Need an account?{" "}
        <span>
          {" "}
          <Link href="/sign-in">SIGN IN</Link>
        </span>
      </h3>
    </div>
  );
}

export default SignUp;
