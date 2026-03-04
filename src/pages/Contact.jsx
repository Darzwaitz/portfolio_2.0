import ContactForm from '../features/contact-form/ContactForm'
import PageTemplate from './PageTemplate'

function Contact() {
    return (
        <PageTemplate pageTitle={'Contact Page'} id={'contact-form'}>
            <ContactForm />
        </PageTemplate>
    )
}

export default Contact
