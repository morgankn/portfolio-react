import React, { useState } from 'react';
import Card from '../Card';
import Group from '../Group.js';


function Project(){
  return(
<section id="work">
          <h2> Portfolio  </h2>
          <div id="border"></div>
          <Card />
            {/* <div class="group"> */}
          <Group />
            {/* </div> */}
            {/* <div className="group">
              <div>
                <a href="https://morgankn.github.io/Horiseon-homepage/"><img className="landing" src={horiseon} alt="Horiseon Landing Page" /></a>
              </div>
            </div> */}
          
          </section>
  )
}

export default Project;