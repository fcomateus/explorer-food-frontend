import { useState, useEffect, useRef } from 'react'
import { Container } from "./style";
import { motion } from "framer-motion";

import image1 from '../../assets/gambe.png'
import image2 from '../../assets/ravanello.png'
import image3 from '../../assets/parma.png'
import image4 from '../../assets/molla.png'

export function Slider(items) {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])

    const mock = [image1, image2, image3, image4]

    return (
        <Container>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
                <motion.div 
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >

                    {mock.map(image => (
                        <motion.div className="item" key={image}>
                            <img src={image}/>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </Container>

    )
}