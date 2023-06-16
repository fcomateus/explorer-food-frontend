import { Container } from './styles'
import { Header } from '../../components/Header'
import { Slider } from '../../components/Slider'
import { Footer } from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useMenu } from '../../hooks/menu'

import homeImgMobile from '../../assets/home-image-mobile.png'
import homeImgDesktop from '../../assets/home-image-desktop.png'

import image1 from '../../assets/gambe.png'
import image2 from '../../assets/ravanello.png'
import image3 from '../../assets/parma.png'
import image4 from '../../assets/molla.png'


export function Home() {
  const { menuOpened } = useMenu();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth)

    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  const mock = [
    {
        id: 1,
        image: image1,
        name: 'Gambe',
        price: 30.90,
        quantity: '01',
        description: 'Massa fresca com camarões e pesto.'
    },
    {
        id: 2,
        image: image2,
        name: 'Ravanello',
        price: 41.90,
        quantity: '01',
        description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'
    },
    {
        id: 3,
        image: image3,
        name: 'Parma',
        price: 55.90,
        quantity: '01',
        description: 'Presunto de parma e rúcula em um pão com fermentação natural.'
    },
    {
        id: 4,
        image: image4,
        name: 'Molla',
        price: 29.90,
        quantity: '01',
        description: 'Molla description, muito gostoso'
    },
    {
      id: 5,
      image: image4,
      name: 'Molla',
      price: 29.90,
      quantity: '01',
      description: 'Molla description, muito gostoso'
    },
    {
      id: 6,
      image: image4,
      name: 'Molla',
      price: 29.90,
      quantity: '01',
      description: 'Molla description, muito gostoso'
    },
    {
      id: 7,
      image: image4,
      name: 'Molla',
      price: 29.90,
      quantity: '01',
      description: 'Molla description, muito gostoso'
    },
  
]

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
            items={mock}
          />
        </section>

        <section className='food-exhibition'>
          <h2 className='section-title'>Pratos principais</h2>
          <Slider
            items={mock}
          />
        </section>

        <section className='food-exhibition'>
          <h2 className='section-title'>Pratos principais</h2>
          <Slider
            items={mock}
          />
        </section>

      </main>

      <Footer/>

    </Container>
  )
}