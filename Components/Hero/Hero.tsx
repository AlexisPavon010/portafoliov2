import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'

import styles from '../../styles/main.module.scss'

export const Hero = () => {
  const [text] = useTypewriter({
    words: ['Curioso"', 'Sincero"', 'Full-Stack Developer"'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className={styles.home}>
      <div className={styles.home__perfil}>
        <Image className={styles.hero__perfil_img} src="/perfil.jpg" alt="Foto de perfil" width={200} height={200} />
        <div className={styles.hero__perfil_wrapper}>
          <h1 className={styles.hero__perfil_text}>Alexis Pavón</h1>
          <p className={styles.hero__perfil_description}>
            {`''${text}`}
          </p>
        </div>
      </div>
      <motion.div
        className={styles.hero__drone}
        initial={{
          x: -100,
          y: 0,
          opacity: 0,
          scale: 0
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 2
        }}
      >
        <img
          className={styles.hero__drone_image}
          src="/hero-drone.webp"
          alt="drone"
        />
      </motion.div>
    </div>
  )
}
