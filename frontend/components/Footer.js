// components/Footer.js
import Link from "next/link";


import styles from "../styles/Footer.module.scss";

const Footer = props => (
  <Link href="/">
    <div className={styles.Footer}>copyright @ 2021</div>
  </Link>
);

export default Footer;
