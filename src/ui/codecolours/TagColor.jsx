import { createContext } from 'react'

const SpanColoredContext = createContext()

function TagColor({ children }) {
    return <SpanColoredContext.Provider>{children}</SpanColoredContext.Provider>
}

function SpanBlue02({ textValue }) {
    return <span className="text-blue-02">{textValue}</span>
}
function SpanBlue03({ textValue }) {
    return <span className="text-blue-03">{textValue}</span>
}
function SpanBrown01({ textValue }) {
    return <span className="text-brown-01">{textValue}</span>
}

function ParagraphBrown01({ children }) {
    return (
        <p className="text-brown-01 border-grey-01 border-l pl-6">{children}</p>
    )
}

function SpanGrey01({ textValue }) {
    return <span className="text-grey-01">{textValue}</span>
}

TagColor.SpanBlue02 = SpanBlue02
TagColor.SpanBlue03 = SpanBlue03
TagColor.SpanBrown01 = SpanBrown01
TagColor.ParagraphBrown01 = ParagraphBrown01
TagColor.SpanGrey01 = SpanGrey01

export default TagColor
