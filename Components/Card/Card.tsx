import styles from '../../styles/main.module.scss'


export const Card = ({ name, url, date, repository, description, technologies }: any) => {
  return (
    <div className={styles.works__card}>
      <h4 className={styles.works__card_title}>{name}</h4>
      <small className={styles.works__card_date}>{date}</small>
      <p className={styles.works__card_description}>
        {description}
      </p>
      <div className={styles.works__card_list}>
        {technologies.map((t: string) => (
          <div className={`${styles.works__card_item} ${styles[`works__card_item_${t}`]}`}>
            {t.toUpperCase()}
          </div>
        ))}
      </div>
      <div className={styles.works__card_btn_container}>
        <a className={`${styles.works__card_btn} ${styles.works__card_btn_blue}`} href={repository} target='_blank'>
          Repositorio
        </a>
        <a className={styles.works__card_btn} href={url} target='_blank'>
          Proyecto
        </a>
      </div>
    </div>
  )
}
