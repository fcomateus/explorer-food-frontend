import { Container } from "./style";

export default function Button({ color, text }) {
    return (
        <Container
            style={{backgroundColor: color}}
        >
            {text}
        </Container>
    )
}