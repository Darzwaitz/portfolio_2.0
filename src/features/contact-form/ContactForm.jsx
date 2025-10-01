function ContactForm() {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        className=""
                        type="text"
                        id="name"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        className=""
                        type="text"
                        id="email"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        className=""
                        id="message"
                        // value={}
                        // onChange={}
                        rows="10"
                    ></textarea>
                </div>
                <br />
                <button
                    type="submit"
                    className=""
                    // disabled={}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm
