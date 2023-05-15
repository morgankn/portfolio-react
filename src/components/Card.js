import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projTwo from '../assets/images/ProjectTwo.png';
import proj3 from '../assets/images/My_Yeraly_Record_Profile.png';

function Card(){
    const [rotate, setRotate] = useState(false);
    return <div className='container'>
        <motion.div animate={{ rotate: rotate ? 360 : 0}}
        onClick={() => {
            setRotate(!rotate);
        }}
        className='photos'>
              <img class="dino" src={projTwo} alt="homescreen for Project Two" />
            </motion.div>
            <figcaption className="title"><p>Created with Node, CSS, MySQL, Javascript, Handlebars</p>
            <a href="https://enigmatic-inlet-20421.herokuapp.com/">Project 2</a></figcaption> 

            <img class='dino' src={proj3} alt='Project three search page' />
            <figcaption className='title'><p>Created with React, Express, Mongoose, Javascript, GraphQL</p>
            <a href="https://gentle-falls-37134.herokuapp.com/"> Project 3</a></figcaption>     
    </div>
    
}

export default Card;