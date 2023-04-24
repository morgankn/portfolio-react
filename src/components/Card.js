import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/images/Dino.png';

function Card(){
    const [rotate, setRotate] = useState(false);
    return <div className='container'>
        <motion.div animate={{ rotate: rotate ? 360 : 0}}
        onClick={() => {
            setRotate(!rotate);
        }}
        className='photos'>
              <img class="dino" src={image1} alt="screenshot of Dino Project" />
            </motion.div>
            <figcaption id="title"><p>Projects made with HTML, CSS, JS, Node, Express, SQL</p>
            <a href="https://enigmatic-inlet-20421.herokuapp.com/">Project 2</a></figcaption>         
    </div>
    
}

export default Card;