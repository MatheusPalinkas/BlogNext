import Link from "next/link";
import Head from "next/head";
import Date from "../components/Date";
import Layout from "../components/Layout";
import { getRepos } from "../lib/repositorios";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";

const Repositorios = ({
  allReposData,
}: {
  allReposData: {
    node_id: string;
    name: string;
    description: string;
    updated_at: string;
  }[];
}) => {
  return (
    <>
      <Head>
        <title>Repositorios</title>
      </Head>
      <Layout>
        <main className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Repositórios</h2>
          <ul className={utilStyles.list}>
            {allReposData.map((repo) => (
              <li
                key={repo.node_id}
                className={`${utilStyles.listItem} ${utilStyles.listItemRepo}`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <Link href="/repos/[id]" as={`/repos/${repo.node_id}`}>
                    <a>{repo.name}</a>
                  </Link>
                  <small className={utilStyles.lightText}>
                    <Date dateString={repo.updated_at} />
                  </small>
                </div>
                <br />
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allReposData = await getRepos();

  return {
    props: {
      allReposData,
    },
  };
};

export default Repositorios;
