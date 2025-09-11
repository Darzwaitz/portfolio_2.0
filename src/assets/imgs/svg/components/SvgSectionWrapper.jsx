function SvgSectionWrapper({ size = 'small', children, customStyles }) {
    let width = ''
    let margin = ''

    // let flexcol = false
    // if (flexcolumn) flexcol = true

    // let svg div wrapper dictate svg image size
    if (size === 'large') (width = 'w-[1.87rem]'), (margin = 'm-3')
    if (size === 'medium') (width = 'w-4'), (margin = 'm-3')
    if (size === 'small') (width = 'w-3.5'), (margin = 'm-3')

    return (
        // <div className={`flex flex-col gap-[1.7rem] ${width} ${margin}`}>
        <div className={`flex ${customStyles} ${width}${margin}`}>
            {children}
        </div>
    )
}

export default SvgSectionWrapper
