// import PageTemplate from '../../pages/PageTemplate'
import TagColor from '../../ui/codecolours/TagColorContext'

function ContactForm() {
    function Input({ name, type, value }) {
        return (
            <>
                <span>
                    <TagColor.SpanGrey01 textValue={'<'} />
                    <TagColor.SpanBlue02 textValue={name} />
                    <TagColor.SpanGrey01 textValue={'>'} />
                </span>
                <input
                    name={name}
                    type={type}
                    className=""
                    value={value}
                    // value={value ? (value = { value }) : ''}
                    placeholder={`<${name} here>`}
                />
                <span>
                    <TagColor.SpanGrey01 textValue={'<'} />
                    <TagColor.SpanBlue02 textValue={`/${name}`} />
                    <TagColor.SpanGrey01 textValue={'>'} />
                </span>
            </>
        )
    }
    return (
        <form className="my-12 flex w-1/2 flex-col gap-4">
            <span>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={'form'} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </span>

            <Input name={'name'} type={'text'} />

            <Input name={'email'} type={'email'} />

            <textarea
                name="text"
                className="font-(500) mt-4 mb-3.5 box-border w-full border border-solid border-current p-3 text-base/22 text-current outline-0 transition-[0.3s] focus:border-2"
                placeholder="Comment"
            ></textarea>

            <Input name={'submit'} value={'submit'} />

            {/* <input
                    className="hover:bg-grey-01 hover:text-grey-02 tr font-(700) -mt-1 w-full cursor-pointer border-0 py-2.5 text-2xl transition-[0.3s]"
                    type="submit"
                    value="SUBMIT"
                /> */}
            <span>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={'/form'} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </span>
        </form>
    )
}

export default ContactForm
