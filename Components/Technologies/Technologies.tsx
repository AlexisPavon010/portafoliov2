import { motion } from 'framer-motion'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';

import styles from '../../styles/main.module.scss'

export const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <h4 className={styles.technologies__text}>Tecnologías que utilizo</h4>
      <div className={styles.technologies__list}>
        <motion.div
          initial={{
            x: -200
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.technologies__list}
        >
          <AiFillHtml5 size='60px' />
          <DiCss3Full size='60px' />
          <SiJavascript size='55px' />
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.technologies__list}
        >
          <FaReact size='60px' />
          <FaGitAlt size='60px' />
          <FaNodeJs size='60px' />
        </motion.div>
      </div>
    </div >
  )
}
