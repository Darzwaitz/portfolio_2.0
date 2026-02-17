import TagColor from '@/ui/codecolours/TagColor'

function DescriptionDiv(description) {
    return (
        <div className="border-l pl-6">
            <h3>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={'description'} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </h3>
            <TagColor.ParagraphBrown01>{description}</TagColor.ParagraphBrown01>

            <TagColor.SpanGrey01 textValue={'<'} />
            <TagColor.SpanBlue02 textValue={'/description'} />

            <TagColor.SpanGrey01 textValue={'>'} />
            <br />
        </div>
    )
}

export default DescriptionDiv
