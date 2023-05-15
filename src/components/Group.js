import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import game from '../assets/images/game.png';
import projOne from '../assets/images/projectOne.png';
import image1 from '../assets/images/Dino.png';
import horiseon from '../assets/images/HoriseonLanding.png';

function Card() {
  return <div className="group">
    <div>
      <a href="https://morgankn.github.io/coding-quiz"> <img className="landing" src={game} alt="Coding Quiz" /></a>
    </div>
    <div>
      <img className="landing" src={image1} alt="Dino Page" />
    </div>
    <div class="group">
      <div>
      <a href="https://morgankn.github.io/Horiseon-homepage/"><img class="landing" src={projOne} alt="Project One Homepage" /></a>
      </div>
      <div>
        <a href="https://morgankn.github.io/Horiseon-homepage/"><img class="landing" src={horiseon} alt="Horiseon Landing Page" /></a>
      </div>
    </div>
    </div>  
}

    export default Card;