import { Container } from "./style";

export function Button({ color, text, ...rest }) {
    return (
        <Container
            {...rest}
            style={{backgroundColor: color}}
        >
            {text}
        </Container>
    )
}