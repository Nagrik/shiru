"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import TextInput from "@/components/common/Input/Input";
import styles from "./styles.module.scss";
import Button from "@/components/common/Button";
import InstagramIcon from "../../../public/assets/icons/Instagram";

function Login() {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
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
          <Link href="/sign-up">SIGN UP</Link>
        </span>
      </h3>
    </div>
  );
}

export default Login;
