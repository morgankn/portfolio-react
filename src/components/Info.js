import React, { useState } from 'react';
import profPic from '../assets/images/profilepic.jpeg';

function Info(){
    return (
        <section class="info">
        <img class="profile" src={profPic} alt="Kelsey in sunglasses" />
        <div class="text">
          <h1>Hi!
            My name is Kelsey Morgan
            <div>I am a Full-Stack Web Developer</div> </h1>
        </div>
        </section>
    )
}

export default Info;