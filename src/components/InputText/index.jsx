import { Container } from './style';

export default function InputText({ placeholder, ...rest }) {
  return (
    <Container
    {...rest}
    >
      <input 
        type="text"
        placeholder={placeholder}
      />
    </Container>
  )
}