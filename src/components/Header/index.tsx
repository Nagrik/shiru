import Link from "next/link";
import styles from "./styles.module.scss";
import CartIcon from "../../../public/assets/icons/CartIcon";
import RouteTypes from "./types";

function Index() {
  return (
    <div className={styles.container}>
      {RouteTypes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className={styles.route_button}
        >
          {route.name}
        </Link>
      ))}
      <CartIcon />
    </div>
  );
}

export default Index;
