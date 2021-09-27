import React, { useState } from 'react';

export default function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const error = "please fill out all fields";

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!email || !userName || !message) {
      setErrorMessage(error);
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // Alert the user their first and last name, clear the inputs
    alert(`Thank you for your message, ${userName}.`);
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>
        Hello {userName}
      </p>
      <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="enter user name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="enter email address"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="type message here"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}