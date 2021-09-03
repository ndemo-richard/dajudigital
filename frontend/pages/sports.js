// pages/index.js
//import ReactPlayer from 'react-player';
//import fetch from "isomorphic-fetch";

import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Router from 'next/router';
import styles from '../styles/sports.module.scss';
//data
import { getAllPosts } from '../lib/api';
import { getSingleNews } from '../lib/api';
import Layout from "../components/Layout";


const Sports = ({allPosts, singleNews }) =>(

	<Layout>
		<div className={styles.wrapper}>
		<div className={styles.header}>
				<h1 className={styles.header_title}>Sports</h1>

			</div>
		<div className={styles.container}>
			
			<div className={styles.main}>
				{singleNews.singleNews.map(({ node } ) => (
					<div className={styles.mainCard} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
						<div className={styles.mainCardContent}>
							<h3 className={styles.mainCardContent_title}>
								<a className={styles.media_link_promo}>{node.title}</a>
							</h3>
							<p className={styles.mainCard_media_summary}>{node.extraPostInfo.summary}</p>				
						</div>
						<div className={styles.mainCardImg}>
							<Image
							src={node.extraPostInfo.previewImage.mediaItemUrl}
							alt="avatar"
							layout="fill"
							/>
						</div>
						
					</div>
				))}
        <div className={styles.contentcard_wrapper}>
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
						<h3 className={styles.contentCard_title}>
								<a className={styles.media_link_promo}>{node.title}</a>
							</h3>
							<p className={styles.contentCard_media_summary}>{node.extraPostInfo.summary}</p>				
						</div>
					</div>
			       ))}
			</div>
			</div>
			<div className={styles.sidebar}>
				<div className={styles.trending}>
					<h4 className={styles.trending_title}>Trending Now</h4>
					{allPosts.data.map(( {node } ) => (
					<div className={styles.cardTrending} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
						<h3 className={styles.cardTrending_title}>
								<a className={styles.media_link_promo}>{node.title}</a>
							</h3>
					</div>
			       ))}
				</div>
			</div>
		</div>

		</div>
	</Layout>

);
export default Sports;

export async function getStaticProps(){
	const allPosts = await getAllPosts();
	const singleNews = await getSingleNews();
	return{
		props: {
			allPosts,
			singleNews
		}
	};

}



