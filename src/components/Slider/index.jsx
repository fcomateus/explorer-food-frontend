import { useState, useEffect, useRef } from 'react'
import { Container } from "./style";
import { motion } from "framer-motion";
import { FiHeart } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'


export function Slider({items}) {
     const {  user } = useAuth();

    const carousel = useRef();
    const [width, setWidth] = useState(0);
    const [dishes, setDishes] = useState(items)

    function handleAdd(dish) {
        const updatedDish = structuredClone(dish)
        
        let { quantity } = updatedDish;
        quantity = parseInt(quantity);
        quantity++;

        if(quantity < 10) {
            quantity = '0' + quantity;
        }
        
        const updatedDishes = [...dishes]

        const index = updatedDishes.findIndex( item => {
            return item.id === updatedDish.id
        })

        updatedDish.quantity = quantity
        
        updatedDishes[index] = updatedDish
        console.log(dishes);
        console.log(updatedDishes);
        setDishes(updatedDishes);
        console.log(dishes);
    }

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])

    return (
        <Container>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
                <motion.div 
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >

                    {user.role === 'costumer' ? items.map(dish => (
                        <motion.div className="item" key={dish.id}>
                            <button className='favorite'>
                                <FiHeart/>
                            </button>

                            <img src={dish.image} alt='Foto do prato'/>
                            <div className='description-costumer'>
                                <Link to={`/details/${dish.id}`} className='dish-name'>{dish.name} &gt;</Link>
                                <p className='dish-description-costumer'>{dish.description}</p>
                                <p className='dish-price-costumer'>R$ {dish.price}</p>
                            </div>

                            <div className='card-controls-costumer'>

                                <div className='wrapper-buttons-quantity'>
                                    <button 
                                        className='card-controls-buttons-costumer'
                                            
                                    >
                                        <AiOutlineMinus/>
                                    </button>
                                    {dish.quantity}
                                    <button 
                                        className='card-controls-buttons-costumer'
                                        onClick={() => handleAdd(dish)}    
                                    >
                                        <AiOutlinePlus/>
                                    </button>
                                </div>

                                <div>
                                    <button
                                        className='add-dish-costumer'
                                    >
                                        incluir
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    ))
                    
                    : items.map( dish => (
                        <motion.div className='item' key={dish.id}>
                            <Link to={`/edit/${dish.id}`} className='edit'>
                                <BiEditAlt/>
                            </Link>
                            <img src={dish.image} alt='Foto do prato'/>
                            <div className='description-admin'>
                                <Link to={`/details/${dish.id}`} className='dish-name'>{dish.name} &gt;</Link>
                                <p className='dish-description-admin'>{dish.description}</p>
                                <p className='dish-price-admin'>R$ {dish.price}</p>
                            </div>
                        </motion.div>
                    ))
                    
                    
                    
                    }

                </motion.div>
            </motion.div>



        </Container>

    )
}