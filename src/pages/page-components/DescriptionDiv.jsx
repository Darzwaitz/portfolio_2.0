import TagBrackets from './TagBrackets'

function DescriptionDiv({ id, border, textContent, htmlTags }) {
    return (
        <article
            id={id}
            className={`${border ? `${'border-l'}` + ' ' : ''}pl-6`}
        >
            <TagBrackets
                htmlTags={htmlTags}
                tagValue={'description'}
                textContent={textContent}
            />
        </article>
    )
}

export default DescriptionDiv
