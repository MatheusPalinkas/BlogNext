import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Quem eu sou</h2>
        <p>
          Olá, meu nome é goku. Brincadeira, me chamo Matheus e sou
          desenvolvedor.
        </p>
        <p>
          Meu primeiro contato com programção foi no curso técnico de
          informática do IFSP câmpus cubatão. Ao qual estou cursando o ultimo
          ano e já tive contato com Java, C#, Python, JavaScript e a lista é
          longa
          <span> &#128513;</span>.
        </p>
        <p>
          Porém meu foco é com desenvolvimento web, principalmente frontend com
          <a href="https://reactjs.org/docs/getting-started.html"> React</a>. E
          esse sou eu <span>&#128515;</span>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  );
}

export default Home;
