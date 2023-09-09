import type { NextPage } from 'next'
import dynamic from 'next/dynamic';

import styles from '../styles/main.module.scss'
import { Header } from '../Components/Header'
import { Hero } from '../Components/Hero'
import { About } from '../Components/About'
import { Works } from '../Components/Works'
import { Technologies } from '../Components/Technologies'

const StarsCanvasComponent = dynamic(() => import('../Components/Background_Stars')
  .then((mod) => mod.StarsCanvas), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div className={styles.hero}>
          <img className={styles.hero__bg} src="/hero-bg.webp" alt="hero-bg" />
        </div>
        <div className={styles.container}>
          <Header />
          <Hero />
          <About />
          <Works />
          <Technologies />
        </div >
      </main>
      <StarsCanvasComponent />
    </>
  )
}

export default Home
