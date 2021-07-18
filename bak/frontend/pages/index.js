// pages/index.js
//import ReactPlayer from 'react-player';
//import fetch from "isomorphic-fetch";

import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/index.module.scss';
//data
//import { getAllPosts } from '../lib/api';
import Layout from "../components/Layout";
//import styles from"../styles/index.module.scss";

const Index = props =>(
  <Layout>
	<div className={styles.container}>
	<div className={styles.main}>
	<div className={styles.mainCard}>
	<div className={styles.mainCardImg}>
	<Image
	 src="/images/1.jpg"
	alt="avater"
	layout="fill"
	/>
	</div>
	<div className={styles.mainCardContent}>
	<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra justo.</h4>
	</div>
	</div>
	<div className={styles.contentCard}>
	<div className={styles.contentCardImg}>
	<Image
	src="/images/2.jpg"
	alt="avater"
	layout="fill"
	/>
	</div>
	<div className={styles.contentCardbody}>
	<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non.</p>
	</div>
	</div>

	</div>
	<div className={styles.sidebar}>
	<div className={styles.about}>
         <h4>DajuDigital News:</h4>
	<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	<p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing eli.</p>
	</div>

	<div className={styles.trending}>
         <h4>Trending Now</h4>
	</div>
	</div>
	</div>

  </Layout>
);

export default Index;
