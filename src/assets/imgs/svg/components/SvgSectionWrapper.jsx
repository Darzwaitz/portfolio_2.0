function SvgSectionWrapper({ id, size, children, customStyles }) {
    let width = ''
    let margin = ''

    // let svg div wrapper dictate svg image size
    if (size === 'large') {
        width = 'w-[1.87rem]'
        margin = 'm-3'
    }
    if (size === 'medium') {
        width = 'w-4'
        margin = 'm-3'
    }
    if (size === 'small') {
        width = 'w-3.5'
        margin = 'm-3'
    }

    return (
        <div id={id} className={`flex ${customStyles} ${width} ${margin}`}>
            {children}
        </div>
    )
}

export default SvgSectionWrapper
