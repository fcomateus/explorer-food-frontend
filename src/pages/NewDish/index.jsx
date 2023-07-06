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
        const file = event.target.files[0]
        setDishFile(file);
    }

    function handleSelectCategory(selectedOption) {
        setSelectedCategory(selectedOption)
    }

    async function handleSubmit(e) {
        e.preventDefault();

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

        try {
            const formData = new FormData();
            
            formData.append('file', dishFile)
            formData.append('name', name)
            formData.append('category', selectedCategory.value)
            formData.append('ingredients', JSON.stringify(ingredients))
            formData.append('price', parseFloat(price).toFixed(2))
            formData.append('description', description)
           

            await api.post('/dishes', formData)
            alert('Prato criado com sucesso!')
            navigate('/')

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível criar prato")
            }
        }

    }

    function getOptions(options) {
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
        <Container>
            <Header/>

            <main>

                <button id='go-back' onClick={e => navigate('/')}>
                    &lt; voltar
                </button>

                <h3>Novo prato</h3>
                <form onSubmit={handleSubmit}>


                    <div id="wrapper-input-file" className="input-wrapper">
                        <label htmlFor="dish-image">Imagem do prato</label>
                        <InputFile
                            isFile={dishFile} 
                            id="dish-image"
                            onChange={handleSubmitImage}
                        />
                    </div>

                    <div id="wrapper-input-name" className="input-wrapper">
                        <label htmlFor="name">Nome</label>
                        <InputText
                            placeholder="Ex: Salada Ceasar"
                            onChange={ e => setName(e.target.value.trim())}
                        />
                    </div>
                    
                    <div id="wrapper-input-category" className="input-wrapper">
                        <label htmlFor="category">Categoria</label>
                        <SelectInput 
                            options={categories} 
                            id="category"
                            isSearchable={true}
                            onChange={handleSelectCategory}
                        />
                    </div>

                    <div id="wrapper-input-ingredients" className="input-wrapper">
                        <label htmlFor="ingredients">Ingredientes</label>
                        <SelectInputMulti
                            getter={getOptions}
                            id='ingredients'
                        />
                    </div>

                    <div id="wrapper-input-price" className="input-wrapper">
                        <label htmlFor="price">Preço</label>
                        <InputText
                            type='text'
                            placeholder="R$ 00,00"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <div id="wrapper-input-description" className="input-wrapper">
                        <label htmlFor="description">Descrição</label>
                        <TextArea
                            onChange={e => setDescription(e.target.value.trim())}
                        />
                    </div>


                </form>

                <div className="button-wrapper">
                    <Button
                        color='#750310'
                        text='Criar novo prato'
                    />
                </div>

            </main>


            <div id="footer-wrapper">
                <Footer/>
            </div> 


        </Container>
            

    )
}