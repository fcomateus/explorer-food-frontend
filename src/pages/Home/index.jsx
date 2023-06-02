import { Container } from './styles'
import { Header } from '../../components/Header'
import { Slider } from '../../components/Slider'
import { useEffect, useState } from 'react'

import homeImgMobile from '../../assets/home-image-mobile.png'
import homeImgDesktop from '../../assets/home-image-desktop.png'

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

    <Slider></Slider>
    </Container>
  )
}