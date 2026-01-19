{
    /* layout-sidebar-right-off.svg */
}

function ToggleSidebarRightIcon({
    defaultColor,
    svgStylesMedium,
    iconSize,
    togglePanels,
}) {
    return (
        <svg
            className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
            data-panel="toggleRight"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={defaultColor}
        >
            {!togglePanels.toggleRight ? (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    // previous
                    // d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H9V14.0007H2ZM10 14.0007V2.00073H14V14.0007H10Z"
                    d="M11.5 2H4.5C3.121 2 2 3.121 2 4.5V11.5C2 12.879 3.121 14 4.5 14H11.5C12.879 14 14 12.879 14 11.5V4.5C14 3.121 12.879 2 11.5 2ZM3 11.5V4.5C3 3.673 3.673 3 4.5 3H9V13H4.5C3.673 13 3 12.327 3 11.5ZM13 11.5C13 12.327 12.327 13 11.5 13H10V3H11.5C12.327 3 13 3.673 13 4.5V11.5Z"
                />
            ) : (
                <path
                    className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
                    data-panel="toggleRight"
                    // previous
                    // d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 14V2H9V14H2Z"
                    d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM9 13V3H4.5C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H9Z"
                />
            )}
        </svg>
    )
}

export default ToggleSidebarRightIcon
