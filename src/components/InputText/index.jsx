import { Container } from './style';

export function InputText({ placeholder, min, max, type, ...rest }) {
  return (
    <Container
    {...rest}
    >
      <input 
        type={type}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
      />
    </Container>
  )
}