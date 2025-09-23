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
                    d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H9V14.0007H2ZM10 14.0007V2.00073H14V14.0007H10Z"
                />
            ) : (
                <path
                    className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
                    data-panel="toggleRight"
                    d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 14V2H9V14H2Z"
                />
            )}
        </svg>
    )
}

export default ToggleSidebarRightIcon
