import { Container } from './styles'
import { Header } from '../../components/Header'
import { Slider } from '../../components/Slider'
import { useEffect, useState } from 'react'

import homeImgMobile from '../../assets/home-image-mobile.png'
import homeImgDesktop from '../../assets/home-image-desktop.png'

import image1 from '../../assets/gambe.png'
import image2 from '../../assets/ravanello.png'
import image3 from '../../assets/parma.png'
import image4 from '../../assets/molla.png'


export function Home() {
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
        quantity: '01'
    },
    {
        id: 2,
        image: image2,
        name: 'Ravanello',
        price: 41.90,
        quantity: '01'
    },
    {
        id: 3,
        image: image3,
        name: 'Parma',
        price: 55.90,
        quantity: '01'
    },
    {
        id: 4,
        image: image4,
        name: 'Molla',
        price: 29.90,
        quantity: '01'
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

      <main id='content'>
        <h4>Refeições</h4>
        <Slider
          items={mock}
        />

        <h4>Pratos principais</h4>
        <Slider
          items={mock}
        />

        <h4>Pratos principais</h4>
        <Slider
          items={mock}
        />

      </main>

    </Container>
  )
}