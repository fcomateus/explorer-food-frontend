import { Container } from './style'
import InputText from '../InputText'

export function Header() {
  return (
    <Container>
      <InputText
        placeholder="Busque por pratos ou ingredientes"
      >
      </InputText>
    </Container>
  )
}