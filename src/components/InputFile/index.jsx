import { Container } from "./style";
import { AiOutlineUpload } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'

export function InputFile({ id,isFile, ...rest }) {
    return (
        <Container>
            <label htmlFor={id}>
                {
                    isFile ? 
                    <>
                        <AiOutlineCheck/>
                        Arquivo selecionado
                    </> 
                    : 
                    <>
                        <AiOutlineUpload/>
                        Selecione o arquivo 
                    </>
                }



            </label>
            <input id={id} type="file" {...rest} />
        </Container>
    )
}