import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import game from '../assets/images/game.png';
import projTwo from '../assets/images/ProjectTwo.png';

function Card(){
   return <div className="group">
              <div>
                <img className="landing" src={game} alt="Coding Quiz" />
                <a href="https://morgankn.github.io/coding-quiz"> </a>
              </div>
               <div>
                <img className="landing" src={projTwo} alt="Project Two Homepage" />
              </div> 
            {/* <div class="group">
              <div>
                <img class="landing" src="assets/travel_site.png" alt="Travel Homepage" />
              </div>
              <div>
                <a href="https://morgankn.github.io/Horiseon-homepage/"><img class="landing" src="assets/HoriseonLanding.png" alt="Horiseon Landing Page" /></a>
              </div> */}
            </div>
      
}

export default Card;