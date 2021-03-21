import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import About from "../components/About/About";
import Formation from "../components/Formation/Formation";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/skills";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* //ESTO MODIFICA HEAD HTML PARA SEO Y TITLE */}
        <Head>
          <title>Memp Cv Template</title>
{/* Meta tags goes here */}
         
          <link rel="icon" type="image/png" href="https://" />
          <link rel="apple-touch-icon" href="https://jodch." />
          <meta property="og:image" content="https://jodch." />
          <meta name="twitter:image" content="https://" />
          <link rel="canonical" href="https://yoururl" />
          <script type="text/javascript" src=""></script>
        </Head>
        <About />
        <Formation />
        <Projects />
        <Skills />
        <Contact />
{/* Feel free to customize and change the footer, but please credit the author. */}
        <footer className={styles.footer}>
          <a
            target="_blank"
            href="https://jodch.com"
            style={{ color: "whitesmoke" }}
          >
            <p>2021 made with ⚡ by José Chiquillo</p>
          </a>
        </footer>
      </div>
    </Layout>
  );
}
