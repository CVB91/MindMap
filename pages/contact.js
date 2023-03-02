import Head from 'next/head'
import { Fragment } from 'react'
import ContactForm from '../components/contact/contact-form'

function ContactPage() {
  return
  <Fragment>
    <Head>
      <meta title='contact me' content='Get in touch with me'/>
    </Head>
    <ContactForm />
  </Fragment>
}

export default ContactPage
