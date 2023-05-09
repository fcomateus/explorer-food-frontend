import { Container } from './style';

export function InputText({ placeholder, min, max, ...rest }) {
  return (
    <Container
    {...rest}
    >
      <input 
        type="text"
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
      />
    </Container>
  )
}