import React, { useState } from 'react';


function Navbar(){
    // const [color, setColor] = useState ('black');
    return (
        <nav className="menu">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#work">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact">Resume</a></li>
        </ul>
      </nav>
    )
}

export default Navbar;

   {/* {/* <p style={{color:color}}>{color}</p>
          <input onChange={e=> setColor (e.target.value)}> */}

        // </input> */}