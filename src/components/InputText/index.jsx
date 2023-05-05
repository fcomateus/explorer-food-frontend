import { Container } from './style';

export default function InputText({ placeholder }) {
  return (
    <Container>
      <input 
        type="text"
        placeholder={placeholder}
      />
    </Container>
  )
}