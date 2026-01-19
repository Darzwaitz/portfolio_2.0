{
    /* layout.svg */
}

function CustomizeLayoutIcon({ iconSize, svgStylesMedium, defaultColor }) {
    return (
        <svg
            className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
            data-panel="toggleCustomizeLayout"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={defaultColor}
        >
            {/* previous */}
            {/* <path d="M3 2L2 3V13L3 14H7L8 13V3L7 2H3ZM3 13V3H7V13H3Z" />
            <path d="M10 3L11 2H14L15 3V6L14 7H11L10 6V3ZM11 3V6H14V3H11Z" />
            <path d="M10 10L11 9H14L15 10V13L14 14H11L10 13V10ZM11 10V13H14V10H11Z" /> */}
            <path
                fillRule="evenodd"
                d="M14 3C14 2.44772 13.5523 2 13 2L10 2C9.44772 2 9 2.44772 9 3L9 6C9 6.55228 9.44772 7 10 7L13 7C13.5523 7 14 6.55228 14 6L14 3ZM13 6L13 3L10 3L10 6L13 6Z"
            />
            <path
                fillRule="evenodd"
                d="M14 9C14 8.44772 13.5523 8 13 8L10 8C9.44772 8 9 8.44772 9 9L9 12C9 12.5523 9.44771 13 10 13L13 13C13.5523 13 14 12.5523 14 12L14 9ZM13 12L13 9L10 9L10 12L13 12Z"
            />
            <path
                fillRule="evenodd"
                d="M7 2C7.55228 2 8 2.44772 8 3L8 12C8 12.5523 7.55228 13 7 13L4 13C3.44772 13 3 12.5523 3 12L3 3C3 2.44771 3.44772 2 4 2L7 2ZM7 3L7 12L4 12L4 3L7 3Z"
            />
        </svg>
    )
}

export default CustomizeLayoutIcon
