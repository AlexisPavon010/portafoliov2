import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'

import styles from '../../styles/main.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <motion.div
        initial={{
          x: -500,
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
          duration: 1
        }}
        className={styles.header__rigth}
      >
        <SocialIcon url="https://www.linkedin.com/in/alexispavon010" bgColor='none' fgColor='white' target='_blank' />
        <SocialIcon url="https://www.facebook.com/alexispavon010" bgColor='none' fgColor='white' target='_blank' />
        <SocialIcon url="https://www.instagram.com/alexispavon010/" bgColor='none' fgColor='white' target='_blank' />
        <SocialIcon url="https://github.com/AlexisPavon010/" bgColor='none' fgColor='white' target='_blank' />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
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
          duration: 1
        }}
        className={styles.header__left}
      >
        <SocialIcon network='email' bgColor='none' fgColor='white' target='_blank' />
        <a href="./Alexis Pavon.pdf" download>
          <img className={styles.header__icon_img} src="/cv.png" alt="" />
        </a>
      </motion.div>
    </header>
  )
}
