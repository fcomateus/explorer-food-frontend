import { Container } from './style';

export function TextArea({ placeholder, defaultValue, min, max, id, ...rest }) {
  return (
    <Container
    {...rest}
    >
      <textarea 
        id={id}
        defaultValue={defaultValue}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
      />
    </Container>
  )
}