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
		<div className={styles.wrapper}>
			<section className={styles.module_header}></section>
			<section className={styles.module_promo}>
				<div className={styles.module_column}>
					<div className={styles.promo_module_content}>
					<div className={styles.media_promo_list} >
						<div className={styles.media_col1}>
						<div className={styles.media_promo_headline}></div>
						</div>
						<div className={styles.media_col2}>
						<div className={styles.media_promo_politics}></div>
						<div className={styles.media_promo_business}></div>
						<div className={styles.media_promo_sports}></div>
						<div className={styles.media_promo_technology}></div>
						</div>


			
					</div>
					</div>
				</div>
			</section>
			<section className={styles.module_content_block}>
				<div className={styles.module_column}>
					<div className={styles.content_module_block}>
						<section className={styles.module_news}>
							<h2 className={styles.module_title}>
							 <Link href="/">
         						 <a className={styles.module_title_link}>News</a>
       						 </Link>
							</h2>
							<div className={styles.module_content}>
	
								<div className={styles.media_list} >

								{singlePost.edges.map(({node }) => (

									<div className={styles.media_list_item} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
										<div className={`${styles["media"]}${styles["block_link"]}`}>
											<div className={styles.media_image}>
												<div className={styles.responsive_image}>
												<Image
													src={node.extraPostInfo.previewImage.mediaItemUrl}
													alt="avater"
													layout="fill"
													/>

												</div>
											
											</div>
											<div className={styles.media_content}>
												<h3 className={styles.media_title}>
													<a className={styles.media_link}>{node.title}</a>
												</h3>
												<p className={styles.media_summary}></p>

											</div>
										</div>
									</div>
										))}
								</div>
							

							</div>

						</section>

						<section className={styles.module_sports}>
							<h2 className={styles.module_title}>
							 <Link href="/">
         						 <a className={styles.module_title_link}>Sports</a>
       						 </Link>
							</h2>
							<div className={styles.module_content}>
	
								<div className={styles.media_list} >

								{singlePost.edges.map(({node }) => (

									<div className={styles.media_list_item} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
										<div className={`${styles["media"]}${styles["block_link"]}`}>
											<div className={styles.media_image}>
												<div className={styles.responsive_image}>
												<Image
													src={node.extraPostInfo.previewImage.mediaItemUrl}
													alt="avater"
													layout="fill"
													/>

												</div>
											
											</div>
											<div className={styles.media_content}>
												<h3 className={styles.media_title}>
													<a className={styles.media_link}>{node.title}</a>
												</h3>
												<p className={styles.media_summary}></p>

											</div>
										</div>
									</div>
										))}
								</div>
							

							</div>

						</section>
						
						
					</div>
				</div>

			</section>
			<section className={styles.module_edditors_choice}></section>
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



