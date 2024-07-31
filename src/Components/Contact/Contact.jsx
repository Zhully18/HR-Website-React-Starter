import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className="contact-form">
            <p>Please fill this form in a decent anner</p>
            <form action="#">
                <h2>Contact Us</h2>
                <div>
                    <label htmlFor="firstName"> Full Name *</label>
                    <div className="names">
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='Last Name'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email">E-mail *</label>
                    <input type="email" placeholder='example@example.com' required/>
                </div>
                <div>
                    <label htmlFor="message"> Message *</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact