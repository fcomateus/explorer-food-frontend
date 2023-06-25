import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../components/InputText'
import { InputFile } from '../../components/InputFile'

export function NewDish() {
    const navigate = useNavigate()

    return (
        <>
            <Header/>
            <Container>
                <button id='go-back' onClick={e => navigate(-1)}>
                    &lt; voltar
                </button>

                <h3>Novo prato</h3>

                <form>
                    <div className="input-wrapper">
                        <label htmlFor="dish-image">Imagem do prato</label>
                        <InputFile id="dish-image"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="name">Nome</label>
                        <InputText
                            placeholder="Ex: Salada Ceasar"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="category">Categoria</label>
                        
                    </div>
                </form>
            </Container>
            {/* <Footer/> */}
        </>
    )
}