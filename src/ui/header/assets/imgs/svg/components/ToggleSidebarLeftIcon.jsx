function ToggleSidebarLeftIcon({
    defaultColor,
    svgStylesMedium,
    iconSize,
    togglePanels,
}) {
    {
        /* layout-sidebar-left.svg */
        /* layout-sidebar-left-off.svg */
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
                    // v1
                    // d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM14 14H7V2H14V14Z"
                    d="M4.5 2C3.11929 2 2 3.11929 2 4.5V11.5C2 12.8807 3.11929 14 4.5 14H11.5C12.8807 14 14 12.8807 14 11.5V4.5C14 3.11929 12.8807 2 11.5 2H4.5ZM7 13V3H11.5C12.3284 3 13 3.67157 13 4.5V11.5C13 12.3284 12.3284 13 11.5 13H7Z"
                />
            ) : (
                !togglePanels.toggleLeft && (
                    <path
                        className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
                        data-panel="toggleLeft"
                        // v1
                        // d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H6V14.0007H2ZM7 14.0007V2.00073H14V14.0007H7Z"
                        d="M4.5 2H11.5C12.879 2 14 3.121 14 4.5V11.5C14 12.879 12.879 14 11.5 14H4.5C3.121 14 2 12.879 2 11.5V4.5C2 3.121 3.121 2 4.5 2ZM13 11.5V4.5C13 3.673 12.327 3 11.5 3H7V13H11.5C12.327 13 13 12.327 13 11.5ZM3 11.5C3 12.327 3.673 13 4.5 13H6V3H4.5C3.673 3 3 3.673 3 4.5V11.5Z"
                    />
                )
            )}
        </svg>
    )
}

export default ToggleSidebarLeftIcon
