import PageTemplate from './PageTemplate'
import ContactForm from '../features/contact-form/ContactForm'

function Contact() {
    return (
        <>
            {/* <div id="contact-page-container"> */}
            <PageTemplate pageTitle={'Contact Page'} id={'contact-form'}>
                <ContactForm />
            </PageTemplate>
            {/* </div> */}
        </>
    )
}

export default Contact
