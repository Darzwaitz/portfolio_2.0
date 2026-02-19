import PageTemplate from '../../pages/PageTemplate'

function ContactForm() {
    return (
        <PageTemplate pageTitle={'Contact Page'} id={'contact-form'}>
            <form className="my-12 flex flex-col gap-4">
                <input
                    name="name"
                    type="text"
                    className="input-box-style-one"
                    placeholder="Name"
                />
                <input
                    name="email"
                    type="text"
                    className="input-box-style-one"
                    placeholder="Email"
                />
                <textarea
                    name="text"
                    // className="feedback-input"
                    className="font-(500) mb-3.5 box-border w-full border border-solid border-current p-3 text-base/22 text-current outline-0 transition-[0.3s] focus:border-2"
                    placeholder="Comment"
                ></textarea>
                <input
                    className="hover:bg-grey-01 hover:text-grey-02 tr font-(700) -mt-1 w-full cursor-pointer border-0 py-2.5 text-2xl transition-[0.3s]"
                    type="submit"
                    value="SUBMIT"
                />
            </form>
        </PageTemplate>
    )
}

export default ContactForm
