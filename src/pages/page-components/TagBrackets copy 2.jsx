import TagColor from '@/ui/codecolours/TagColorContext'

function TagBrackets({ htmlTags, tagValue, textContent, children }) {
    // function OpenCloseTag() {
    function OpenTag({ tagValue }) {
        return (
            <>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={tagValue} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </>
        )
    }
    function CloseTag({ tagValue }) {
        return (
            <>
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={`/${tagValue}`} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </>
        )
    }
    // function OpenCloseTag({ innerTag, H2Tag }) {
    function OpenCloseTag({ H2Tag, innerTag }) {
        return H2Tag == 'show' ? (
            <>
                <h4>
                    <OpenTag tagValue={tagValue} />
                </h4>

                {innerTag ? innerTag : children}
                {/* {children} */}
                <div>TEST SHOW</div>

                <CloseTag tagValue={tagValue} />
            </>
        ) : (
            <>
                <h2>
                    <OpenTag tagValue={tagValue} />
                </h2>

                {/* {innerTag ? innerTag : textContent} */}
                {children}
                <div>TESTY</div>
                <CloseTag tagValue={tagValue} />
            </>
        )
    }

    return (
        <>
            {htmlTags === 'h1' && (
                <h1>
                    <OpenCloseTag />
                </h1>
            )}
            {htmlTags === 'h2' && (
                <h2>
                    <OpenCloseTag />
                </h2>
            )}
            {htmlTags === 'h2' && (
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
            {htmlTags === 'h3' && (
                <h3>
                    <OpenCloseTag />
                </h3>
            )}
            {htmlTags === 'h4' && (
                <h4>
                    <OpenCloseTag
                        innerTag={
                            <TagColor.SpanBlue03 textValue={textContent} />
                        }
                    />
                </h4>
            )}
            {htmlTags === 'span' && (
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
            {htmlTags.includes('h2') && htmlTags.includes('openTagOnly') && (
                <OpenCloseTag H2Tag={'show'} />
            )}
        </>
    )
}

export default TagBrackets
