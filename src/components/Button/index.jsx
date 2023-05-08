import { Container } from "./style";

export default function Button({ color, text }) {
    console.log(color);
    return (
        <Container
            style={{backgroundColor: color}}
        >
            {text}
        </Container>
    )
}