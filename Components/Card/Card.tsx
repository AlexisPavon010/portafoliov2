import styles from '../../styles/main.module.scss'


export const Card = ({ name, url, date, repository, description }: any) => {
  return (
    <div className={styles.works__card}>
      <h4 className={styles.works__card_title}>{name}</h4>
      <small className={styles.works__card_date}>{date}</small>
      <p className={styles.works__card_description}>
        {description}
      </p>
      <div className={styles.works__card_list}>
        <div className={`${styles.works__card_item} ${styles.works__card_item_green}`}>
          HTML
        </div>
        <div className={`${styles.works__card_item} ${styles.works__card_item_pink}`}>
          SASS
        </div>
        <div className={`${styles.works__card_item} ${styles.works__card_item_blue}`}>
          REACT
        </div>
      </div>
      <div className={styles.works__card_btn_container}>
        <a className={`${styles.works__card_btn} ${styles.works__card_btn_blue}`} href={url} target='_blank'>
          Repositorio

        </a>
        <a className={styles.works__card_btn} href={url} target='_blank'>
          Proyecto
        </a>
      </div>
    </div>
  )
}
