import { useState, useEffect } from 'react'
import classes from './contact-form.module.css'
import Notification from '../ui/notification'

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestError, setRequestError] = useState()
  const [requestStatus, setRequestStatus] = useState() //'pending', 'success', 'error

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  async function sendMessageHandler(event) {
    event.preventDefault()

    //add client-side validation optional here

    setRequestStatus('pending')

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })

      setRequestStatus('success')
      setEnteredMessage('')
      setEnteredName('')
      setEnteredEmail('')
    } catch (error) {
      console.log(error)
      setRequestError(error.message)
      setRequestStatus('error')
    }
  }

  let notfication

  if (requestStatus === 'pending') {
    notfication = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    }
  }

  if (requestStatus === 'success') {
    notfication = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    }
  }

  if (requestStatus === 'error') {
    notfication = {
      status: 'error',
      title: 'Error sending message...',
      message: requestError,
    }
  }

  return (
    <section className={classes.contact}>
      <h1>Get in touch!</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notfication && (
        <Notification
          status={notfication.status}
          title={notfication.title}
          message={notfication.message}
        />
      )}
    </section>
  )
}

export default ContactForm
