function SvgIconwrapper({
    id,
    onClick,
    iconSize,
    // hover,
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
                    // onClick moved to child here - originally on parent div above
                    onClick={onClick}
                    className={`flex h-full items-center ${customStyles}`}
                >
                    {children}
                </div>
            </div>
        )

    if (iconSize === 'small')
        return (
            <div
                className={`group text-grey-01 cursor-pointer ${customStyles}`}
                //  onClick={onClick}
            >
                {children}
            </div>
        )
}

export default SvgIconwrapper
