import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission goes here
    // You can send the form data to a server or perform any other actions
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    // Display the alert
    alert('Okay! We will connect with you via email');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form
        onSubmit={handleSubmit}
        style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}
      >
        <h4>For any queries and more information,</h4>
        <center>
          <h2>Contact CineTick</h2>
        </center>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: '100%', padding: '5px' }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
