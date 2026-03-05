import TagBrackets from './TagBrackets'

function DescriptionDiv({ id, border, textContent }) {
    return (
        <div id={id} className={`${border ? `${'border-l'}` + ' ' : ''}pl-6`}>
            <TagBrackets
                htmlTags={['h3', 'p']}
                tagValue={'description'}
                textContent={textContent}
            />
            {/* <br />
            <TagBrackets
                htmlTags={['h4']}
                tagValue={'description'}
                textContent={textContent}
            /> */}
        </div>
    )
}

export default DescriptionDiv
