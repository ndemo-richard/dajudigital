import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import ReactPlayer from 'react-player/lazy';
import Image from 'next/image';
import { getAllPostsWithSlug, getPost } from '../../lib/api';
import styles from '../../styles/Blog.module.scss';
import Layout from '../../components/Layout';

export default function Post({ postData }){
 const router = useRouter();

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
 <p>posted on &nbsp; {formatDate(postData.date)}</p>
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
 <p className={styles.linkBack}>
 <Link href='/'><a>back to articles</a></Link>
</p>
</main>
</div>
	 </div>
	 </Layout>
);
}


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
