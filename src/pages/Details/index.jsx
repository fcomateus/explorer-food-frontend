import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from '../../components/Button'

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


export function Details() {
    const [dish, setDish] = useState({})
    const { user } = useAuth()
    
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDetails() {
            const response = await api.get(`/dishes/${params.id}`)
            const treatedData = {
                ...response.data,
                ingredients: JSON.parse(response.data.ingredients)
            }
            setDish(treatedData)
        }

        fetchDetails()

    }, [])

    return(
        <>
            <Header/>
            <Container>
                <button id='go-back' onClick={e => navigate('/')}>
                    &lt; voltar
                </button>

                <div id="img-wrapper">
                    <img src={`${api.defaults.baseURL}/files/${dish.image_path}`} alt="Foto do prato" />
                </div>

                <div id="description-wrapper">
                    <h1>{dish.name}</h1>
                    <p>{dish.description}</p>

                    <div className="ingredient-container">

                        {
                            dish.ingredients && 
                            dish.ingredients.map( dish => {
                                return (
                                    <div key={dish.value} className="ingredient-exihibition">
                                        {dish.value}
                                    </div>
                                )
                            })
                        }
                    </div>

                    {
                        user.role == 'admin' ?
                            <Button
                                color='#750310'
                                text='Editar prato'
                            >
                                
                            </Button>
                        :

                        ''
                    }
                    
                </div>

            </Container>
            <Footer/>
        </>
    )
}