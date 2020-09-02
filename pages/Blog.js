import Head from "next/head";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <main className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Blog;
