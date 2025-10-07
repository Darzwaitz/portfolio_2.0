function SvgIconwrapper({ onClick, iconSize, hover, customStyles, children }) {
    if (iconSize === 'large')
        return (
            <div className="group relative inline-block cursor-pointer">
                {children}
            </div>
        )

    if (iconSize === 'medium')
        return (
            <div onClick={onClick} className={'group relative cursor-pointer'}>
                <div
                    // if customStyles, use customStyles hover, else passed in hover styles
                    className={`${customStyles ? '' : hover}${customStyles ? customStyles : 'text-grey-06 z-50 rounded-sm p-[3px]'}`}
                >
                    {children}
                </div>
            </div>
        )
}

export default SvgIconwrapper
