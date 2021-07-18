
import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import styles from "../styles/Layout.module.scss";



import navButtons from "../config/buttons";


const Layout = props => {
  const appTitle = `dajudigital`;

  return (
    <div className={styles.Layout}>
	  <head>
	  <title>dajudigital</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1"/>
	  </head>
	  <Header appTitle={appTitle} />

         <NavBar />

      <div className={styles.Content}>{props.children}</div>

	  <Footer footer={props.children} />
    </div>
  );
};

export default Layout;
