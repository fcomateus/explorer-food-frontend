import { Container } from './style';

export function TextArea({ placeholder, min, max, id, ...rest }) {
  return (
    <Container
    {...rest}
    >
      <input 
        id={id}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
      />
    </Container>
  )
}