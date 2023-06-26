import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../components/InputText'
import { InputFile } from '../../components/InputFile'
import { SelectInput } from '../../components/SelectInput'
import { SelectInputMulti } from '../../components/SelectInputMulti'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function NewDish() {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchCategories() {
            const response = await api.get('/categories')
            const categories = response.data
            const options = categories.map( category => {
                return {
                    value: category.id,
                    label: category.description
                }
            })
            setCategories(options)            
        }

        fetchCategories()

    }, [])


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
                        <SelectInput 
                            options={categories} 
                            id="category"
                            isSearchable={true}
                            
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="ingredients">Ingredientes</label>
                        <SelectInputMulti
                            id='ingredients'
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="price">Preço</label>
                        <InputText
                            type='text'
                            placeholder="R$ 00,00"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="description">Descrição</label>
                        
                    </div>
                </form>
            </Container>
            <Footer/>
        </>
    )
}