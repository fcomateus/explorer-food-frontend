import { Container } from './style'
import InputText from '../InputText'


export function Header() {
  return (
    <Container>
      <h2>
        <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill="#065E7C"/>
        </svg>

        
          food explorer
      </h2>

      <InputText
        placeholder="Busque por pratos ou ingredientes"
      >
      </InputText>
    </Container>
  )
}