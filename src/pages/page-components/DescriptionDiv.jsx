import TagColor from '@/ui/codecolours/TagColorContext'

function DescriptionDiv({ border, children }) {
    return (
        <div
            id="description"
            className={`${border ? `${'border-l'}` + ' ' : ''}pl-6`}
        >
            <h3>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={'description'} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </h3>
            <TagColor.ParagraphBrown01>{children}</TagColor.ParagraphBrown01>

            <TagColor.SpanGrey01 textValue={'<'} />
            <TagColor.SpanBlue02 textValue={'/description'} />

            <TagColor.SpanGrey01 textValue={'>'} />
            <br />
        </div>
    )
}

export default DescriptionDiv
