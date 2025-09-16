// import Tooltip from '@/features/tooltip/Tooltip'

function RestoreButtonIcon({ iconStyles }) {
    /* chrome-restore.svg */

    return (
        // <span>
        <svg
            className={iconStyles}
            // width="28"
            // height="28"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <path d="M3 5v9h9V5H3zm8 8H4V6h7v7z" />
            <path
                // fill-rule="evenodd"
                // clip-rule="evenodd"
                d="M5 5h1V4h7v7h-1v1h2V3H5v2z"
            />
        </svg>
        // <Tooltip msg={'Restore'} arrowDirection={'up'} />
        // </span>
    )
}

export default RestoreButtonIcon
