function SvgWrapper({ size = 'small', children }) {
    let width = ''
    let margin = ''
    // let svg div wrapper dictate svg image size
    if (size === 'large') (width = 'w-[30px]'), (margin = 'm-3')
    if (size === 'medium') (width = 'w-4'), (margin = 'm-3')
    if (size === 'small') (width = 'w-3.5'), (margin = 'm-3')

    return (
        <div
            role="SvgWrapper"
            className={`flex flex-col gap-[1.7rem] ${width} ${margin}`}
        >
            {children}
        </div>
    )
}

export default SvgWrapper
