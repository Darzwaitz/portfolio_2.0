// function PageHeading({ splitTitle }) {
function PageHeading({ title }) {
    // Other Options
    // const splitTitle = title.toLowerCase().split(' ')
    // const splitTitle = title.split(' ')

    return (
        <h1 className="font-code mb-6 cursor-default">
            <span className="text-pink-01">{'import'}&nbsp;</span>
            <span className="text-blue-03">{title.split(' ').join('')}</span>
            <span className="text-pink-01">&nbsp;{'from'}</span>
            <span className="text-brown-01">&nbsp;&apos;Pages&apos;</span>
        </h1>
        // <h1 className="mb-4">
        //     <span className="text-pink-01">{splitTitle[0].toLowerCase()}</span>
        //     &nbsp;
        //     <span className="text-blue-03">{splitTitle[1]}</span>
        // </h1>
    )
}

export default PageHeading
