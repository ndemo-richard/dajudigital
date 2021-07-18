// pages/index.js
//import ReactPlayer from 'react-player';
//import fetch from "isomorphic-fetch";

import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Router from 'next/router';
import styles from '../styles/index.module.scss';
//data
import { getAllPosts } from '../lib/api';
import { getSinglePost } from '../lib/api';
import Layout from "../components/Layout";


const Index = ({allPosts, singlePost }) =>(

	<Layout>
		<div className={styles.container}>
			<div className={styles.main}>
				{singlePost.edges.map(({ node } ) => (
					<div className={styles.mainCard} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
						<div className={styles.mainCardImg}>
							<Image
							src={node.extraPostInfo.previewImage.mediaItemUrl}
							alt="avatar"
							layout="fill"
							/>
						</div>
						<div className={styles.mainCardContent}>
							<h3>{node.title}</h3>
						</div>
					</div>
				))}

				{allPosts.data.map(( {node } ) => (
					<div className={styles.contentCard} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
						<div className={styles.contentCardImg}>
							<Image
							src={node.extraPostInfo.previewImage.mediaItemUrl}
							alt="avater"
							layout="fill"
							/>
						</div>
						<div className={styles.contentCardbody}>
							<h4>{node.title}</h4>
						</div>
					</div>
			       ))}
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

export async function getStaticProps(){
	const allPosts = await getAllPosts();
	const singlePost = await getSinglePost();
	return{
		props: {
			allPosts,
			singlePost
		}
	};

}




