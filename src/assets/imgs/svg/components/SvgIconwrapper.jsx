function SvgIconwrapper({ iconSize, hover, children }) {
    if (iconSize === 'medium')
        return (
            <div className="group relative inline-block">
                <div className={`${hover} rounded p-[3px] text-grey-06`}>
                    {children}
                </div>
            </div>
        )

    return <div className="group relative inline-block">{children}</div>
}

export default SvgIconwrapper
