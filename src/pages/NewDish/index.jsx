import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../components/InputText'
import { InputFile } from '../../components/InputFile'
import { SelectInput } from '../../components/SelectInput'
import { SelectInputMulti } from '../../components/SelectInputMulti'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { _ } from 'lodash'

export function NewDish() {
    const navigate = useNavigate()

    const [dishFile, setDishFile] = useState(null);
    
    const [name, setName] = useState('');
    
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({});

    const [ingredients, setIngredients] = useState([])
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    function handleSubmitImage(event) {
        console.log('OI');
        const file = event.target.files[0]
        console.log('arquivo',file);
        setDishFile(file);
    }

    function handleSelectCategory(selectedOption) {
        setSelectedCategory(selectedOption)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('info');
        console.log('imagem do prato',dishFile);
        console.log(name);
        console.log(selectedCategory);
        console.log(ingredients);
        console.log(price);
        console.log(description);

        if(!dishFile) {
            return alert('Insira do arquivo de imagem');
        }

        if(!name) {
            return alert('Digite o nome do prato')
        }

        if(_.isEmpty(selectedCategory)) {
            return alert('Selecione uma categoria')
        }
        
        if(_.isEmpty(ingredients)) {
            return alert ('Digite ao menos um ingrediente')
        }

        if(isNaN(parseFloat(price))) {
            return alert('Digite um preço válido')
        }

        if(!description) {
            return alert('Digite uma descrição')
        }

    }

    function selectIngredientsCallback(options) {
        const treatedOptions = options.map( option => {
            return {
                label: option.label.trim(),
                value: option.value.trim()
            }
        })
        setIngredients(treatedOptions)
    }

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

                <form onSubmit={handleSubmit}>

                    <div className="input-wrapper">
                        <label htmlFor="dish-image">Imagem do prato</label>
                        <InputFile
                            isFile={dishFile} 
                            id="dish-image"
                            onChange={handleSubmitImage}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="name">Nome</label>
                        <InputText
                            placeholder="Ex: Salada Ceasar"
                            onChange={ e => setName(e.target.value.trim())}
                        />
                    </div>
                    
                    <div className="input-wrapper">
                        <label htmlFor="category">Categoria</label>
                        <SelectInput 
                            options={categories} 
                            id="category"
                            isSearchable={true}
                            onChange={handleSelectCategory}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="ingredients">Ingredientes</label>
                        <SelectInputMulti
                            callback={selectIngredientsCallback}
                            id='ingredients'
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="price">Preço</label>
                        <InputText
                            type='text'
                            placeholder="R$ 00,00"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="description">Descrição</label>
                        <TextArea
                            onChange={e => setDescription(e.target.value.trim())}
                        />
                    </div>

                    <div className="input-wrapper">
                        <Button
                            color='#750310'
                            text='Criar novo prato'
                        />
                    </div>

                </form>
            </Container>
            <Footer/>
        </>
    )
}