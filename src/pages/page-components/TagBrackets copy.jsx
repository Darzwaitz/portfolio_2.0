import TagColor from '@/ui/codecolours/TagColorContext'

function TagBrackets({ htmlTags, tagValue, textContent, children }) {
    // function OpenCloseTag() {
    function OpenCloseTag({ innerTag, H2Tag }) {
        return H2Tag ? (
            <>
                <h2>
                    <TagColor.SpanGrey01 textValue={'<'} />
                    <TagColor.SpanBlue02 textValue={tagValue} />
                    <TagColor.SpanGrey01 textValue={'>'} />
                </h2>
                {innerTag ? innerTag : textContent}
                {children}
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={`/${tagValue}`} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </>
        ) : (
            <>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={tagValue} />
                <TagColor.SpanGrey01 textValue={'>'} />
                {innerTag ? innerTag : textContent}
                {children}
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
            {htmlTags == 'h2' && (
                <h2>
                    <OpenCloseTag />
                </h2>
            )}
            {htmlTags.includes('h2') && htmlTags.includes('openTagOnly') && (
                <h2>
                    {' '}
                    <OpenCloseTag
                        innerTag={
                            <TagColor.ParagraphBrown01
                                textValue={textContent}
                            />
                        }
                    ></OpenCloseTag>
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
            {htmlTags.includes('h2OpenTagOnly') && (
                <OpenCloseTag H2Tag={true} />
            )}
        </>
    )
}

export default TagBrackets
