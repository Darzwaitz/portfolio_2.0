function SvgIconwrapper({
    id,
    onClick,
    iconSize,
    hover,
    customStyles,
    children,
}) {
    if (iconSize === 'large')
        // color set here for currentColor of children
        return (
            <div
                className="group text-grey-01 relative inline-block cursor-pointer"
                onClick={onClick}
            >
                {children}
            </div>
        )

    if (iconSize === 'medium')
        return (
            <div
                className={'group relative h-full cursor-pointer items-center'}
            >
                <div
                    id={id}
                    // onClick move to child here - originally on parent div above
                    onClick={onClick}
                    // if customStyles, use customStyles hover, else passed in hover styles
                    className={`flex h-full items-center ${customStyles ? '' : hover}${customStyles ? customStyles : 'text-grey-06 z-50 rounded-sm p-[3px]'}`}
                >
                    {children}
                </div>
            </div>
        )
}

export default SvgIconwrapper
