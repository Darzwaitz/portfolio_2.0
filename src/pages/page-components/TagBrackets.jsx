import TagColor from '@/ui/codecolours/TagColorContext'

function TagBrackets({ htmlTags, tagValue, textContent }) {
    // function OpenCloseTag() {
    function OpenCloseTag({ innerTag }) {
        return (
            <>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={tagValue} />
                <TagColor.SpanGrey01 textValue={'>'} />
                {innerTag ? innerTag : textContent}
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={`/${tagValue}`} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </>
        )
    }
    return (
        <>
            {htmlTags == 'h1' && (
                <h1>
                    <OpenCloseTag />
                </h1>
            )}
            {htmlTags == 'h2' && (
                <h2>
                    <OpenCloseTag />
                </h2>
            )}
            {htmlTags == 'h3' && (
                <h3>
                    <OpenCloseTag />
                </h3>
            )}
            {htmlTags == 'h4' && (
                <h4>
                    <OpenCloseTag
                        innerTag={
                            <TagColor.SpanBlue03 textValue={textContent} />
                        }
                    />
                </h4>
            )}
            {htmlTags == 'span' && (
                <span>
                    <OpenCloseTag />
                </span>
            )}
            {htmlTags.includes('h3') && htmlTags.includes('p') && (
                <OpenCloseTag
                    innerTag={
                        <TagColor.ParagraphBrown01 textValue={textContent} />
                    }
                />
            )}
        </>
    )
}

export default TagBrackets
