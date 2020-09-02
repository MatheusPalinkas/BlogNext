import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import { getAllPostNames, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

const Post = ({ postData }) => (
  <Layout>
    <Head>
      <title> {postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  </Layout>
);

export async function getStaticPaths() {
  const paths = getAllPostNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.name);
  return { props: { postData } };
}

export default Post;
