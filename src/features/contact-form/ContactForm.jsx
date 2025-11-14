function ContactForm() {
    return (
        <div>
            <form className="mx-auto my-12 max-w-lg">
                <input
                    name="name"
                    type="text"
                    className="feedback-input"
                    placeholder="Name"
                />
                <input
                    name="email"
                    type="text"
                    className="feedback-input"
                    placeholder="Email"
                />
                <textarea
                    name="text"
                    // className="feedback-input"
                    className="font-(500) focus:borde mb-3.5 box-border w-full border-2 border-r-4 border-solid border-current p-3 text-base/22 text-current outline-0 transition-[0.3s] focus:border-2"
                    placeholder="Comment"
                ></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
            {/* <form>
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
            </form> */}
        </div>
    )
}

export default ContactForm
