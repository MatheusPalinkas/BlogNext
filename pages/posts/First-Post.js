import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

const FirstPost = () => (
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1 className="h-page">FirstPost</h1>
    <h2>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <br />
      <a href="/">Back to Home tag a</a>
    </h2>

    <style jsx>{`
      .h-page {
        color: red;
      }
    `}</style>
  </Layout>
);

export default FirstPost;
