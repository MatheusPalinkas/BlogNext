import Head from "next/head";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import { getAllPostNames, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    content: string;
  };
}) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostNames();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.name as string);
  return { props: { postData } };
};

export default Post;
