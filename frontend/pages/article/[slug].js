import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import ReactPlayer from 'react-player/lazy';
import Image from 'next/image';
import { getAllPostsWithSlug, getlatestNews, getPost } from '../../lib/api';
import styles from '../../styles/Blog.module.scss';
import Layout from '../../components/Layout';
import Sidebar from './sidebar';

//import images for testing
import pic1 from '../../img/1.jpg'
import sport1 from '../../img/sport1.jpg'
import rarienda from '../../img/rarienda.jpg'
import sa from '../../img/sa.png'


 const Post = ({ postData })=> {
	 const router = useRouter();
	 const myLoader = ({ src, width, quality }) => {
  return `../../img/${src}?w=${width}&q=${quality || 75}`
}

 if(!router.isFallBack && !postData?.slug){
 return <p> this is an error</p>;
 }
 const formatDate = date => {
 const newDate = new Date(date);
 const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

 return `${monthNames[newDate.getMonth()]
 } ${newDate.getDate()}, ${newDate.getFullYear()}`;
 };

 return (
	 <Layout>
		 <div className={styles.wrapper}>
	 <div className={styles.container}>
 <div className={styles.main}>
 <Head>
 <title>{postData.title}</title>
 </Head>
 <main>
 {router.isFallback ? (
 <h2>Loading ..</h2>
 ) : (
 <article >
	 <div className={styles.title}>
 <h1>{postData.title}</h1>
		 </div>
 <p className={styles.p}>posted on &nbsp; {formatDate(postData.date)}</p>
 <div >
	 <div className={styles.Image}>
	 <Image
	 src={postData.extraPostInfo.previewImage.mediaItemUrl}
	 alt="avater"
	 layout="fill"
	 />
	 </div>
	 <div className={styles.content}
            dangerouslySetInnerHTML={{ __html: postData.content}}
	 />
 </div>

 </article>
 )}
</main>
</div>
		 <div className={styles.sidebar}>
	 
	 <Sidebar/>

 </div>
		 </div>
	 <div className={styles.carousel_wrapper}>
	 <hr></hr>
						 <h2 className={styles.carousel_title}>Incase you missed it</h2>
				 <div className={styles.carousel}>
					 <div className={styles.card}>
		 <div className={styles.resizableImg}>
								 <Image
										src={sa}
									 alt="avatar"
									 layout="fill" />
								 </div>
								 <div className={styles.card_content}>
									 <h5 className={styles.card_content_title}>Lorem ipsum dolor sit amet.</h5>
								 </div>
								 
      
							 </div>
	 <div className={styles.card}>
		 <div className={styles.resizableImg}>
								 <Image
										src={pic1}
									 alt="avatar"
									 layout="fill" />
								 </div>
								 <div className={styles.card_content}>
									 <h5 className={styles.card_content_title}>Lorem ipsum dolor sit amet.</h5>
								 </div>
								 
      
							 </div>
							 <div className={styles.card}>
		 <div className={styles.resizableImg}>
								 <Image
										src={sport1}
									 alt="avatar"
									 layout="fill" />
								 </div>
								 <div className={styles.card_content}>
									 <h5 className={styles.card_content_title}>Lorem ipsum dolor sit amet.</h5>
								 </div>
								 
      
							 </div>
							 <div className={styles.card}>
		 <div className={styles.resizableImg}>
								 <Image
										src={rarienda}
									 alt="avatar"
									 layout="fill" />
								 </div>
								 <div className={styles.card_content}>
									 <h5 className={styles.card_content_title}>Lorem ipsum dolor sit amet.</h5>
								 </div>
								 
      
							 </div>
							 </div>

		 </div>
		 </div>
	 </Layout>
);
}

export default Post 



export async function getStaticPaths(){
  const allPosts = await getAllPostsWithSlug();

  return {
  paths: allPosts.edges.map(({ node }) => `/article/${node.slug}`) || [],
  fallback:true
  };
  }

export async function getStaticProps({ params}){
const data = await getPost(params.slug);


return {
props: {
   postData:data.post
   }
};
}


