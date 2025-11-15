function ContactForm() {
    return (
        <div>
            <form className="mx-auto my-12 flex max-w-lg flex-col gap-4">
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
