import styles from '../../styles/main.module.scss'

export const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.about__text}>Sobre Mi</h2>
      <p className={styles.about__description}>
        Actualmente estudio desarrollo frontend y en estos momentos me encuentro aplicando mis conocimientos en el desarrollo de páginas web responsivas. Mi objetivo principal es continuar aprendiendo para seguir formándome constantemente y desarrollarme profesionalmente.
      </p>
    </div>
  )
}
