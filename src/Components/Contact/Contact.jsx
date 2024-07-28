import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
        <h2>Contact Me</h2>
        <form className='contact-form'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id='email' name="email" required />
            
            <label htmlFor="subject">Subject</label>
            <input type="text" id='subject' name="subject" required />

            <label htmlFor="message">Message</label>
            <textarea id='mesasge' name="message" rows="5" required></textarea>

            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Contact
