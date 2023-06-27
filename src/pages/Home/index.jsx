import { Container } from './styles'
import { Header } from '../../components/Header'
import { Slider } from '../../components/Slider'
import { Footer } from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useMenu } from '../../hooks/menu'

import homeImgMobile from '../../assets/home-image-mobile.png'
import homeImgDesktop from '../../assets/home-image-desktop.png'
import { api } from '../../services/api'
import { _ } from 'lodash'

export function Home() {
  const { menuOpened } = useMenu();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const [dishes, setDishes] = useState([])
  const [meals, setMeals] = useState([])
  const [deserts, setDeserts] = useState([])
  const [drinks, setDrinks] = useState([])

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth)

    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get('dishes')
      let treatedData = response.data.map( dish => {
        return {
          ...dish,
          ingredients: JSON.parse(dish.ingredients),
          price: dish.price.toLocaleString('pt-br', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }),
          image: `${api.defaults.baseURL}/files/${dish.image_path}`
        }
      })

      setDishes(treatedData)
      const dishesByCategory = _.groupBy(treatedData, 'category_id')
      
      //ids das categorias
      if(dishesByCategory[1] && dishesByCategory[1].length > 0) {
        setMeals(dishesByCategory[1]);
      }

      if(dishesByCategory[2] && dishesByCategory[2].length > 0) {
        setDeserts(dishesByCategory[2]);
      }

      if(dishesByCategory[3] && dishesByCategory[3].length > 0) {
        setDrinks(dishesByCategory[3]);
      }
      
    }

    fetchDishes()

  },[])

  

  return (
    <Container>
      <Header/>

      <div id='panel'>
        <img src={screenWidth < 1024 ? homeImgMobile : homeImgDesktop} alt="Macarrons e frutinhas"/>
        <div id='panel-text'>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </div>

      <main id='content' 
        className={!menuOpened ? '' : 'invisible'}
        >

        <section className='food-exhibition'>
          <h2 className='section-title'>Refeições</h2>
          <Slider
            items={meals}
          />
        </section>

        <section className='food-exhibition'>
          <h2 className='section-title'>Sobremesas</h2>
          <Slider
            items={deserts}
          />
        </section>

        <section className='food-exhibition'>
          <h2 className='section-title'>Bebidas</h2>
          <Slider
            items={drinks}
          />
        </section>

      </main>

      <Footer/>

    </Container>
  )
}