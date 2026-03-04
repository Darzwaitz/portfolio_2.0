// import TagColor from '@/ui/codecolours/TagColorContext'
import TagBrackets from './TagBrackets'

function DescriptionDiv({ id, border, textContent }) {
    return (
        <div id={id} className={`${border ? `${'border-l'}` + ' ' : ''}pl-6`}>
            {/* <TagBrackets htmlTags={'p'} tagValue={'descriptionzzzzz'}> */}
            <TagBrackets
                htmlTags={['h3', 'test']}
                tagValue={'descriptionTest'}
                textContent={textContent}
            />
            {/* <TagBrackets
                htmlTags={['h3']}
                tagValue={'descriptionzzzzz'}
                textContent={textContent}
            /> */}
            {/* <TagBrackets htmlTags={['h3']} tagValue={'descriptionzzzzz'}> */}
            {/* <TagColor.ParagraphBrown01> */}
            {/* {textContent} */}
            {/* </TagColor.ParagraphBrown01> */}
            {/* </TagBrackets> */}
        </div>
    )
}

export default DescriptionDiv
