import TagColor from '../../ui/codecolours/TagColorContext'

function TagBrackets({ htmlTags, tagValue, textContent, children }) {
    function OpenCloseTag({ innerTag }) {
        return (
            <>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={tagValue} />
                <TagColor.SpanGrey01 textValue={'>'} />
                {innerTag ? children : textContent}
                {/* { textContent} */}
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
            {htmlTags == 'span' && (
                <span>
                    <OpenCloseTag />
                </span>
            )}
            {htmlTags.includes('h3') && htmlTags.includes('test') && (
                <OpenCloseTag innerTag={true}>
                    <TagColor.ParagraphBrown01 />
                    {/* {textContent} */}
                    {/* </TagColor.ParagraphBrown01> */}
                </OpenCloseTag>
            )}
        </>
    )
}

export default TagBrackets
