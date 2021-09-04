// pages/index.js
//import ReactPlayer from 'react-player';
//import fetch from "isomorphic-fetch";

import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Router from 'next/router';
import styles from '../styles/index.module.scss';
//data
import { getAllPosts, gettechnology, getpolitics, getsports,getlatestNews,getlifestyle,getthreesports } from '../lib/api';
import { getSingleNews } from '../lib/api';
import Layout from "../components/Layout";


const Index = ({allPosts, singleNews ,technology,politics,sports,latestNews,lifestyle,threesports,}) =>(

	<Layout>
		<div className={styles.wrapper}>
			<section className={styles.module_header}>
				<div className={styles.logo}>
						<Image
					src="/images/logo.jpg"
					alt="logo"
						layout="fill"
					/>
					
				</div>
				<div className={styles.hook}></div>
			</section>
			<section className={styles.module_promo}>
				<div className={styles.module_column}>
					<div className={styles.promo_module_content}>
					<div className={styles.media_promo_list} >
						<div className={styles.media_col1}>
                          
							{singleNews.singlenew.map(({node }) =>(

                              <div className={styles.media_promo_headline} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
                                <div className={`${styles["media"]}${styles["block_link"]}`}>
										<div className={styles.media_image_promo}>
											<div className={styles.responsive_image}>
											<Image
												src={node.extraPostInfo.previewImage.mediaItemUrl}
												alt="avater"
												layout="fill"
												/>

											</div>
										
										</div>
										<div className={styles.media_content_promo}>
												<h3 className={styles.media_title_promo}>
													<a className={styles.media_link_promo}>{node.title}</a>
												</h3>
												<p className={styles.media_summary_promo}>{node.extraPostInfo.summary}</p>
                                                
												
											</div>

											
			
									</div>
							  </div>
							))}
							<div className={styles.power_links}>
                            <h2 className={styles.module_title_promo_title}>
							 <Link href="/">
         						 <a className={styles.module_title_mini_link}>News</a>
       						 </Link>
							</h2>
							</div>
						
						</div>
						<div className={styles.media_col2}>
							<div className={styles.media_promo_politics}>
						{politics.politic.map(({node }) => (

								<div className={styles.row1} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
									<div className={`${styles["media"]}${styles["block_link"]}`}>
										<div className={styles.media_image_col2}>
											<div className={styles.responsive_image}>
											<Image
												src={node.extraPostInfo.previewImage.mediaItemUrl}
												alt="avater"
												layout="fill"
												/>

											</div>
										
										</div>
										<div className={styles.media_content_col2}>
												<h3 className={styles.media_title_col2}>
													<a className={styles.media_link_promo}>{node.title}</a>
												</h3>
												 
												

											</div>
			
									</div>
								</div>
						))}
						<div className={styles.power_links}>
						<h2 className={styles.module_title_promo_title}>
							 <Link href="/pol">
         						 <a className={styles.module_title_mini_link}>Politics</a>
       						 </Link>
							</h2>

						</div>
						</div>
						
						<div className={styles.media_promo_technology}>
						{sports.sport.map(({node }) => (

<div className={styles.row1} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
	<div className={`${styles["media"]}${styles["block_link"]}`}>
		<div className={styles.media_image_col2}>
			<div className={styles.responsive_image}>
			<Image
				src={node.extraPostInfo.previewImage.mediaItemUrl}
				alt="avater"
				layout="fill"
				/>

			</div>
			
		
		</div>
		<div className={styles.media_content_col2}>
												<h3 className={styles.media_title_col2}>
													<a className={styles.media_link_promo}>{node.title}</a>
												</h3>
												 
												

											</div>

	</div>
</div>
))}
<div className={styles.power_links}>
<h2 className={styles.module_title_promo_title}>
							 <Link href="/">
         						 <a className={styles.module_title_mini_link}>Sports</a>
       						 </Link>
							</h2>

</div>
</div>

<div className={styles.media_promo_business}>
{technology.technologies.map(({node }) => (

<div className={styles.row1} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
	<div className={`${styles["media"]}${styles["block_link"]}`}>
		<div className={styles.media_image_col2}>
			<div className={styles.responsive_image}>
			<Image
				src={node.extraPostInfo.previewImage.mediaItemUrl}
				alt="avater"
				layout="fill"
				/>

			</div>
		
		</div>
		<div className={styles.media_content_col2}>
												<h3 className={styles.media_title_col2}>
													<a className={styles.media_link_promo}>{node.title}</a>
												</h3>
												 
												

											</div>

	</div>
</div>
))}
<div className={styles.power_links}>
<h2 className={styles.module_title_promo_title}>
							 <Link href="/">
         						 <a className={styles.module_title_mini_link}>technology</a>
       						 </Link>
							</h2>

</div>
</div>


	<div className={styles.media_promo_sports}>
{lifestyle.life.map(({node }) => (

<div className={styles.row1} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
	<div className={`${styles["media"]}${styles["block_link"]}`}>
		<div className={styles.media_image_col2}>
			<div className={styles.responsive_image}>
			<Image
				src={node.extraPostInfo.previewImage.mediaItemUrl}
				alt="avater"
				layout="fill"
				/>

			</div>
		
		</div>
		<div className={styles.media_content_col2}>
												<h3 className={styles.media_title_col2}>
													<a className={styles.media_link_promo}>{node.title}</a>
												</h3>
												
                                                
												
											</div>

	</div>
</div>
))}
<div className={styles.power_links}>
<h2 className={styles.module_title_promo_title}>
							 <Link href="/">
         						 <a className={styles.module_title_mini_link}>lifestyle</a>
       						 </Link>
							</h2>

</div>
					
</div>

						
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

								{latestNews.news.map(({node }) => (

									<div className={styles.media_list_item} >
										<div className={`${styles["media"]}${styles["block_link"]}`} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
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
												<p className={styles.media_summary}>{node.extraPostInfo.summary}</p>
                                              
												
											</div>
										</div>
										<div className={styles.power_links_module}>
										<h2 className={styles.module_title_mini}>
							 <Link href="/">
         						 <a className={styles.module_title_mini_link}>News</a>
       						 </Link>
							</h2>

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

								{threesports.threesport.map(({node }) => (
									
                                    
									<div className={styles.media_list_item} >
										<div className={`${styles["media"]}${styles["block_link"]}`} onClick={() => Router.push(`/article/${ node.slug }`)} key={node.id}>
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
												<p className={styles.media_summary}>{node.extraPostInfo.summary}</p>
                                                 
											
											</div>
										</div>
										<div className={styles.power_links_module}>
										<h2 className={styles.module_title_mini}>
							 <Link href="/">
         						 <a className={styles.module_title_mini_link}>Sports</a>
       						 </Link>
							</h2>

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
	const singleNews = await getSingleNews();
	const politics = await getpolitics();
	const technology = await gettechnology();
	const sports = await getsports();
	const latestNews = await getlatestNews();
	const lifestyle = await getlifestyle()
	const threesports = await getthreesports()
	return{
		props: {
			allPosts,
			singleNews,
			politics,
			technology,
			sports,
			latestNews,
			lifestyle,
			threesports
		}
	};

}



