import React, { useState } from 'react';
import image1 from '../assets/images/Dino.png';
 

function Project(){
  return(
<section id="work">
          <h2> Work   </h2>
          <div id="border"></div>
          <div class="photos">
            <div>
              <img class="dino" src={image1} alt="screenshot of Dino Project" />
              <figcaption id="title"><p>Projects made with HTML, CSS, JS, Node, Express, SQL</p>
                <a href="https://enigmatic-inlet-20421.herokuapp.com/">Project 2</a></figcaption>
            </div>
            <div class="group">
              <div>
                {/* <img class="landing" src="assets/Screenshot 2023-03-20 at 9.11.34 PM.png" alt="Horiseon Landing Page" /> */}
              </div>
              <div>
                {/* <img class="landing" src="assets/travel_site.png" alt="Travel Homepage" /> */}
              </div>
            </div>
            <div class="group">
              <div>
                {/* <img class="landing" src="assets/travel_site.png" alt="Travel Homepage" /> */}
              </div>
              <div>
                <a href="https://morgankn.github.io/Horiseon-homepage/"><img class="landing" src="assets/HoriseonLanding.png" alt="Horiseon Landing Page" /></a>
              </div>
            </div>
          </div>
          </section>
  )
}

export default Project;