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
      setErrorMessage(alert(`Name isn't long enough`))
    } else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )){
      setErrorMessage(alert(`Not a valid email`))
    }else if(message.length < 10){
      setErrorMessage(alert(`Message needs to be longer`))
    }    
    alert(`Thank you ${name}, we'll get back to you soon!`);
    setName('');
    setEmail('');
    setMessage('');
  }


  return (
    <section className='container'>
      <h2 className="contact">Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input className="feedback-input"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
          <input className="feedback-input"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
            <input className="feedback-input" id='textarea'
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