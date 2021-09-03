// components/Footer.js
import Link from "next/link";


import styles from "../styles/Footer.module.scss";

const Footer = props => (
  <div className={styles.Footer}>
  <Link href="/" passHref>
    <div className={styles.copyright}>
    copyright @ 2021
    </div>      
  </Link>
  </div>
);

export default Footer;
