'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    ///
    const sendEmail = async () => {
        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                formData,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            clearForm()
            console.log('SUCCESS!', response.status, response.text);
            return response;
        } catch (error) {
            console.log('FAILED...', error);
            return error
        }
    }
    ///
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        sendEmail(formData).then(() => {
        setIsSubmitting(false);
        setStateMessage('Message sent!');
        setTimeout(() => {
            setStateMessage(null);
        }, 5000); // hide message after 5 seconds
        });
    };

 return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" onChange={handleChange} value={formData.name} />
      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <label>Message</label>
      <textarea name="message" value={formData.message} onChange={handleChange} />
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
 );
};

export default ContactForm;