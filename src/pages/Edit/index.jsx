import { Container } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { InputText } from '../../components/InputText'
import { InputFile } from '../../components/InputFile'
import { SelectInput } from '../../components/SelectInput'
import { SelectInputMulti } from '../../components/SelectInputMulti'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { _ } from 'lodash'

export function Edit() {
    const navigate = useNavigate()
    const params = useParams();

    const [dish, setDish] = useState({});

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

    async function handleUpdate(e) {
        e.preventDefault();

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

            if(dishFile) {
                formData.append('file', dishFile)
            }

            formData.append('name', name)
            formData.append('category', selectedCategory.value)
            formData.append('ingredients', JSON.stringify(ingredients))
            formData.append('price', parseFloat(price).toFixed(2))
            formData.append('description', description)



            await api.post(`/dishes/${params.id}`, formData)

            alert('Prato atualizado com sucesso!')
            navigate('/')

        } catch(error) {
            alert("Não foi possível criar prato")
        }

    }

    async function handleDelete() {
        const confirmDelete = confirm('Tem certeza que deseja deletar o prato?')

        if(confirmDelete) {
            await api.delete(`/dishes/${params.id}`)
            alert('Prato deletado')
            navigate('/')
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
        let options = null
        async function fetchCategories() {
            const response = await api.get('/categories')
            const categories = response.data
            options = categories.map( category => {
                return {
                    value: category.id,
                    label: category.description
                }
            })
            setCategories(options)            
        }

        async function fetchDishDetails() {
            const response = await api.get(`/dishes/${params.id}`)
            const data = response.data
            setDish(data);
            setName(data.name)
            const defaultCategory = _.find(options, category => category.value == data.category_id)
            setSelectedCategory(defaultCategory)

            const ingredientsOptions = JSON.parse(data.ingredients)
            setIngredients(ingredientsOptions)

            setPrice(data.price)
            setDescription(data.description)
        }

        
        fetchCategories()
        fetchDishDetails()

    }, [])

    return (
        <>
            <Header/>
            <Container>
                <button id='go-back' onClick={e => navigate('/')}>
                    &lt; voltar
                </button>

                <h3>Editar prato</h3>

                <form onSubmit={ e => e.preventDefault()}>

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
                            defaultValue={name}
                            onChange={ e => setName(e.target.value.trim())}
                        />
                    </div>
                    
                    <div id="wrapper-input-category" className="input-wrapper">

                        {
                            selectedCategory && 
                            <>
                                <label htmlFor="category">Categoria</label>
                                <SelectInput 
                                options={categories} 
                                    value={selectedCategory}
                                    id="category"
                                    isSearchable={true}
                                    onChange={handleSelectCategory}
                                />
                            </>
                        }
                    </div>

                    <div id="wrapper-input-ingredients" className="input-wrapper">
                        {
                            !_.isEmpty(ingredients) &&
                            <>
                                <label htmlFor="ingredients">Ingredientes</label>
                                <SelectInputMulti
                                    getter={getOptions}
                                    defaultOptions={ingredients}
                                    id='ingredients'
                                />
                            
                            </>
                        }
                    </div>

                    <div id="wrapper-input-price" className="input-wrapper">
                        <label htmlFor="price">Preço</label>
                        <InputText
                            type='text'
                            placeholder="R$ 00,00"
                            defaultValue={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <div id="wrapper-input-description" className="input-wrapper">
                        <label htmlFor="description">Descrição</label>
                        <TextArea
                            defaultValue={description}
                            onChange={e => setDescription(e.target.value.trim())}
                        />
                    </div>
                </form>

                <div className="buttons-wrapper">
                    <Button
                        color='#750310'
                        text='Atualizar prato'
                        onClick={handleUpdate}
                    />

                    <Button
                        color='#76797B'
                        text='Excluir prato'
                        onClick={handleDelete}
                    />
                </div>
            </Container>
            
            <div style={{
                position:'fixed',
                bottom: 0,
                width: '100%'
            }}>
                <Footer/>
            </div>

        </>
    )
}