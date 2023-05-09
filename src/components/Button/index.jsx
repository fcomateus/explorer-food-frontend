import { Container } from "./style";

export function Button({ color, text }) {
    return (
        <Container
            style={{backgroundColor: color}}
        >
            {text}
        </Container>
    )
}