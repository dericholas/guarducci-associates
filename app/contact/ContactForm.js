'use client'
import emailjs from 'emailjs-com';
import { useState } from 'react';
// import ErrorList from './ErrorList';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [stateMessage, setStateMessage] = useState(null)
    const [formErrors, setFormErrors] = useState({})
    
    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }
    const validateForm = () => {
        const requiredFields = {
            name: "Name",
            email: "Email",
            message: "Message"
            
        }
        const fieldErrors = {}
        for (const fieldKey of Object.keys(requiredFields)) {
            if (formData[fieldKey].trim() === "") {
                fieldErrors[fieldKey] = `'${requiredFields[fieldKey]}' is required!`
            }
        }
        return fieldErrors
    }
    const sendEmail = async () => {
        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                formData,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            clearForm()
            console.log('SUCCESS!', response.status, response.text)
            return response;
        } catch (error) {
            console.log('FAILED...', error)
            return error
        }
    }
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const fieldErrors = validateForm()
        if(Object.keys(fieldErrors).length !== 0) {
            setFormErrors(fieldErrors)
        } else {
            setFormErrors({})
            setIsSubmitting(true)
            setStateMessage('Message sent!')
            sendEmail().then(() => {
                setIsSubmitting(false)
                setTimeout(() => {
                        setStateMessage(null)
                    }, 5000)
                    })
        }
    }

 return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} value={formData.name} />
            {formErrors.name && <p style={{color: 'red'}}>{formErrors.name}</p>}
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {formErrors.name && <p style={{color: 'red'}}>{formErrors.email}</p>}
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} />
            {formErrors.name && <p style={{color: 'red'}}>{formErrors.message}</p>}
            <input type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
        </form>
        {/* <ErrorList errors={formErrors}/> */}
    </>
 )
}

export default ContactForm