import styles from '../../styles/main.module.scss'
import { Card } from '../Card'


const data = [
  {
    name: 'Cuatro Carnes',
    url: 'https://cuatrocarnes.com',
    repository: 'https://github.com/AlexisPavon010/cuatro-carnes',
    date: '21/02/2023 - 23/06/2023',
    description: ' Ecommerce enfocado en la venta de carnes de alta calidad. A través de nuestra plataforma, los clientes podrán realizar compras en línea de manera fácil y cómoda, seleccionando entre una amplia variedad de cortes de carne fresca, acompañamientos y productos complementarios.',
    technologies: ['nextjs', 'sass', 'ant']
  },
  {
    name: 'Intercorp Marketing',
    url: 'https://www.intercorpmarketingawards.com',
    repository: 'https://github.com/AlexisPavon010/marketing-front',
    date: '26/01/2023 - 27/03/2023',
    description: 'Aplicación web que busca destacar a través de diferentes categorías de participación, a las acciones/campañas /ideas de marketing de las marcas de Intercorp que demuestran el mayor impacto en el cumplimiento de los objetivos de negocio.',
    technologies: ['react', 'sass', 'ant', 'nest']
  },
  {
    name: 'Oasis Fundation',
    url: 'https://alexispavon010.github.io/oasis-fundation',
    repository: 'https://github.com/AlexisPavon010/oasis-fundation',
    date: '28/07/2022',
    description: 'Maquetacion de Oasis Fundation con HTML y sass, aplicacion web de sorteo de casas en blockchain',
    technologies: ['react', 'sass', 'html']
  },
  {
    name: 'Sushi Clone',
    url: 'https://alexispavon010.github.io/Sushi',
    repository: '',
    date: '21/07/2022',
    description: 'Maquetación del diseño responsivo de Sushi aplicación web3 descentralizada, desarrollada en HTML utilizando SASS',
    technologies: ['react', 'sass', 'html']
  },
  {
    name: 'Tesla Clone',
    url: 'https://alexispavon010.github.io/Tesla-Clone',
    repository: 'https://github.com/AlexisPavon010/Tesla-Clone',
    date: '17/05/2021',
    description: 'Maquetación del diseño responsivo de Tesla, desarrollada en HTML utilizando SASS',
    technologies: ['react', 'sass', 'html']
  },
  {
    name: 'Rock paper scissors',
    url: 'https://fascinating-kataifi-c164ab.netlify.app',
    repository: 'https://github.com/AlexisPavon010/rock-paper-scissors',
    date: '06/10/22',
    description: 'Maquetación del juego piedra papel o tijera, desarrollada en HTML utilizando SASS',
    technologies: ['react', 'sass', 'html']
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