import styles from '../../styles/main.module.scss'
import { Card } from '../Card'


const data = [
  {
    name: 'Oasis Fundation',
    url: 'https://alexispavon010.github.io/oasis-fundation',
    repository: 'https://github.com/AlexisPavon010/oasis-fundation',
    date: '28/07/2022',
    description: 'Maquetacion de Oasis Fundation con HTML y sass, aplicacion web de sorteo de casas en blockchain'
  },
  {
    name: 'Sushi Clone',
    url: 'https://alexispavon010.github.io/Sushi',
    repository: '',
    date: '21/07/2022',
    description: 'Maquetación del diseño responsivo de Sushi aplicación web3 descentralizada, desarrollada en HTML utilizando SASS'
  },
  {
    name: 'Tesla Clone',
    url: 'https://alexispavon010.github.io/Tesla-Clone',
    repository: 'https://github.com/AlexisPavon010/Tesla-Clone',
    date: '17/05/2021',
    description: 'Maquetación del diseño responsivo de Tesla, desarrollada en HTML utilizando SASS'
  },
  {
    name: 'Rock paper scissors',
    url: 'https://fascinating-kataifi-c164ab.netlify.app',
    repository: 'https://github.com/AlexisPavon010/rock-paper-scissors',
    date: '06/10/22',
    description: 'Maquetación del juego piedra papel o tijera, desarrollada en HTML utilizando SASS'
  },
]

export const Works = () => {
  return (
    <div className={styles.works}>
      <h3 className={styles.works__text}>Proyectos</h3>
      <div className={styles.works__wrapper}>
        {data.map((props) => (
          <Card {...props} />
        ))}
      </div>
    </div>
  )
}