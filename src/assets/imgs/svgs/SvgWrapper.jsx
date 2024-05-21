function SvgWrapper({ size = 'small', children }) {
    let width = ''
    let margin = ''

    if (size === 'large') (width = 'w-[30px]'), (margin = 'm-3')
    if (size === 'medium') (width = 'w-4'), (margin = 'm-3')
    if (size === 'small') (width = 'w-3.5'), (margin = 'm-3')

    return (
        <span className={`flex flex-col gap-4 ${width} ${margin}`}>
            {children}
        </span>
    )
}

export default SvgWrapper
