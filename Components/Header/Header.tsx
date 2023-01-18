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
        <SocialIcon network='email' bgColor='gray' fgColor='white' target='_blank' />
        <a href="https://www.canva.com/design/DAEKlv9vepk/5O5dai-_IYcdm9qAIsSmOA/view?utm_content=DAEKlv9vepk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank'>
          <img className={styles.header__icon_img} src="/cv.png" alt="" />
        </a>
      </motion.div>
    </header>
  )
}
