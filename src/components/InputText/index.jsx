import { Container } from './style';

export function InputText({ placeholder, min, max, type, id, ...rest }) {
  return (
    <Container
    {...rest}
    >
      <input 
        id={id}
        type={type}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
      />
    </Container>
  )
}