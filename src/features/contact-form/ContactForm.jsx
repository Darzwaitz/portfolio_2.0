import TagBrackets from '../../pages/page-components/TagBrackets'

function ContactForm() {
    function Input({ name, type, value }) {
        return (
            <>
                <TagBrackets
                    htmlTags={'span'}
                    tagValue={name}
                    textContent={
                        <>
                            <br />
                            <input
                                name={name}
                                type={type}
                                className=""
                                value={value}
                                placeholder={`<${name} here>`}
                            />
                            <br />
                        </>
                    }
                ></TagBrackets>
            </>
        )
    }
    return (
        <form className="my-12 flex w-1/2 flex-col gap-4">
            <TagBrackets
                htmlTags={'span'}
                tagValue={'form'}
                textContent={
                    <>
                        <br />
                        <Input name={'name'} type={'text'} />
                        <br />
                        <Input name={'email'} type={'email'} />

                        <textarea
                            name="text"
                            className="font-(500) mb-3.5 box-border w-full border border-solid border-current p-3 text-base/22 text-current outline-0 transition-[0.3s] focus:border-2"
                            placeholder="Comment"
                        ></textarea>

                        <Input name={'submit'} value={'submit'} />
                        <br />
                    </>
                }
            />
        </form>
    )
}

export default ContactForm
