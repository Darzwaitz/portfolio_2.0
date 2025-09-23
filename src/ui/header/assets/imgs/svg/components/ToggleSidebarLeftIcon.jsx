function ToggleSidebarLeftIcon({
    defaultColor,
    svgStylesMedium,
    iconSize,
    togglePanels,
}) {
    {
        /* layout-sidebar-left.svg */
        // off svg
        // <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H6V14.0007H2ZM7 14.0007V2.00073H14V14.0007H7Z"/></svg>
    }
    return (
        <svg
            id="toggle-left"
            className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
            data-panel="toggleLeft"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={defaultColor}
        >
            {togglePanels.toggleLeft ? (
                <path
                    className="pointer-events-none"
                    data-panel="toggleLeft"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM14 14H7V2H14V14Z"
                />
            ) : (
                !togglePanels.toggleLeft && (
                    <path
                        className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
                        data-panel="toggleLeft"
                        d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H6V14.0007H2ZM7 14.0007V2.00073H14V14.0007H7Z"
                    />
                )
            )}
        </svg>
    )
}

export default ToggleSidebarLeftIcon
