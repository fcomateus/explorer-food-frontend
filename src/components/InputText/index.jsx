import { Container } from './style';

export function InputText({ placeholder, min, defaultValue, max, type, id, ...rest }) {
  return (
    <Container
    {...rest}
    >
      <input 
        id={id}
        type={type}
        defaultValue={defaultValue}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
      />
    </Container>
  )
}