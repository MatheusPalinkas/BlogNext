import Head from "next/head";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import { getReposNames, getRepoByName } from "../../lib/repositorios";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

const Post = ({
  repo,
}: {
  repo: { name: string; html_url: string; description: string };
}) => {
  return (
    <Layout>
      <Head>
        <title>{repo.name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{repo.name}</h1>
        <div className={utilStyles.lightText}>
          <p>{repo.description}</p>
          <a href={repo.html_url} target="blank">
            Acessar código no github
          </a>
        </div>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getReposNames();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const repo = await getRepoByName(params.name as string);
  return { props: { repo } };
};

export default Post;
