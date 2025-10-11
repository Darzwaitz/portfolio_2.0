function NavMenuIcon({ hover, defaultColor, onToggleExplorer }) {
    return (
        <svg
            className={`${hover} pointer-events-none relative`}
            onClick={onToggleExplorer}
            width="100%"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill={defaultColor}
        >
            <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z" />
        </svg>
    )
}

export default NavMenuIcon
