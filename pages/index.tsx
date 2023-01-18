import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/main.module.scss'
import { Header } from '../Components/Header'
import { Hero } from '../Components/Hero'
import { About } from '../Components/About'
import { Works } from '../Components/Works'
import { Technologies } from '../Components/Technologies'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.hero}>
        <img className={styles.hero__bg} src="/hero-bg.webp" alt="hero-bg" />
      </div>
      <div className={styles.container}>
        <Head>
          <title>Alexis Uziel Pavón (@alexispavon010) - FullStack Developer</title>
          <meta name="description" content="Portafolio de @alexispavon010 (Alexis Uziel Pavón)" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Hero />
        <About />
        <Works />
        <Technologies />
      </div >
    </>
  )
}

export default Home
