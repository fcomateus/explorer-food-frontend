import { useState, useEffect, useRef } from 'react'
import { Container } from "./style";
import { motion } from "framer-motion";
import { FiHeart } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

import image1 from '../../assets/gambe.png'
import image2 from '../../assets/ravanello.png'
import image3 from '../../assets/parma.png'
import image4 from '../../assets/molla.png'

export function Slider({items}) {
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    console.log(items);
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

                    {items.map(dish => (
                        <motion.div className="item" key={dish.id}>
                            <button className='favorite'>
                                <FiHeart/>
                            </button>

                            <img src={dish.image}/>
                            <p>{dish.name}</p>
                            <p className='price'>R$ {dish.price}</p>

                            <div className='card-controls'>
                                <button 
                                    className='card-controls-buttons'
                                    onClick={() => handleAdd(dish)}    
                                >
                                    <AiOutlinePlus/>
                                </button>
                                {dish.quantity}
                                <button className='card-controls-buttons'>
                                    <AiOutlineMinus/>
                                </button>
                            </div>

                            <button
                                className='add-dish'
                            >
                                incluir
                            </button>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>



        </Container>

    )
}