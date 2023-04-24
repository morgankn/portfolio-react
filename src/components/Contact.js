import React, { useState } from 'react';

function Contact(){
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        

}
//if no cursor in text box then error message field is required 
//function to handle change 

return (
    <section>
        <h2>Contact Form</h2>
        <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
        <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        /><form className="form">
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        </form>
    </section>
)


export default Contact;