import ContactForm from '../features/contact-form/ContactForm'
import PageHeading from './PageHeading'

function Contact() {
    return (
        <>
            <PageHeading title={'Contact Page'} />

            <div id="contact-page-container">
                <ContactForm />
            </div>
        </>
    )
}

export default Contact
