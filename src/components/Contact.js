import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
  if(inputType === 'name'){
    setName(inputValue)
  } else if(inputType === 'email'){
    setEmail(inputValue)
  }else if(inputType === 'message'){
    setMessage(inputValue)
  };


  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name.length < 1){
      setErrorMessage("That isn't valid")
    } else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )){
      setErrorMessage("Not good email")
    }else if(message.length < 10){
      setErrorMessage("Not enough info")
    }
  }
  //if no cursor in text box then error message field is required 
  //function to handle change 

  return (
    <section>
      <h2>Contact Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
            />
          <button type='submit'>Submit</button>
          </form>
          <p>{errorMessage}</p>
        </section>
        )
};

        export default Contact;