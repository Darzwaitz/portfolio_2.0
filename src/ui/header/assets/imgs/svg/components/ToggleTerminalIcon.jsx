function ToggleTerminalIcon({
    defaultColor,
    svgStylesMedium,
    iconSize,
    togglePanels,
}) {
    /* layout-panel.svg */
    /* layout-panel-off.svg */

    return !togglePanels.toggleTerminal ? (
        <svg
            // className="pointer-events-none w-4"
            className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
            data-panel="toggleTerminal"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={defaultColor}
        >
            <path
                className="pointer-events-none"
                data-panel="toggleTerminal"
                // previous
                // d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 10.0007V2.00073H14V10.0007H2ZM2 11.0007H14V14.0007H2V11.0007Z"
                d="M14 11.5L14 4.5C14 3.121 12.879 2 11.5 2L4.5 2C3.121 2 2 3.121 2 4.5L2 11.5C2 12.879 3.121 14 4.5 14L11.5 14C12.879 14 14 12.879 14 11.5ZM4.5 3L11.5 3C12.327 3 13 3.673 13 4.5L13 9L3 9L3 4.5C3 3.673 3.673 3 4.5 3ZM4.5 13C3.673 13 3 12.327 3 11.5L3 10L13 10L13 11.5C13 12.327 12.327 13 11.5 13L4.5 13Z"
            />
        </svg>
    ) : (
        <svg
            className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
            data-panel="toggleTerminal"
            width="22"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={defaultColor}
        >
            <path
                className="pointer-events-none"
                data-panel="toggleTerminal"
                fillRule="evenodd"
                clipRule="evenodd"
                // previous
                // d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 10V2H14V10H2Z"
                d="M14 11.5C14 12.8807 12.8807 14 11.5 14L4.5 14C3.11929 14 2 12.8807 2 11.5L2 4.5C2 3.11929 3.11929 2 4.5 2L11.5 2C12.8807 2 14 3.11929 14 4.5L14 11.5ZM3 9L13 9L13 4.5C13 3.67157 12.3284 3 11.5 3L4.5 3C3.67157 3 3 3.67157 3 4.5L3 9Z"
            />
        </svg>
    )
}

export default ToggleTerminalIcon
