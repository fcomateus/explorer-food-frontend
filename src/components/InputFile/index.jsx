import { Container } from "./style";
import { AiOutlineUpload } from 'react-icons/ai'

export function InputFile({ id }) {
    return (
        <Container>
            <label htmlFor={id}>
                <AiOutlineUpload/>
                Selecione o arquivo
            </label>
            <input id={id} type="file"/>
        </Container>
    )
}