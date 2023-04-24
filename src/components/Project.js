import React, { useState } from 'react';
import Card from './Card.js';
import Group from './Group.js';

function Project(){
  return(
<section id="work">
          <h2> Portfolio  </h2>
          <div id="border"></div>
          <Card />
            <div class="group">
          <Group />
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
          
          </section>
  )
}

export default Project;