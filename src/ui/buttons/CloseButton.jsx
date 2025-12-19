import CloseButtonIcon from './assets/imgs/svgs/components/CloseButtonIcon'

function CloseButton({
    asideMenuStyles,
    headerStyles,
    portfolioStyles,
    onToggleExplorer,
    showTooltip,
    // onClick,
}) {
    let buttonStyles = ''
    let iconStyles = ''
    let commonStyles = ''

    if (asideMenuStyles) iconStyles = 'hover:bg-grey-08 h-6 p-1'
    if (headerStyles) {
        iconStyles = 'm-auto h-6 p-1'
        commonStyles = 'flex w-[3rem] h-full self-center hover:text-grey-02c'
        buttonStyles = 'hover:bg-red-01'
    }

    if (portfolioStyles)
        iconStyles = 'hover:bg-red-01 h-6 p-1 hover:text-grey-02c'

    return (
        <span
            className={`${commonStyles} ${buttonStyles} text-gre group`}
            onClick={onToggleExplorer}
        >
            <CloseButtonIcon iconStyles={iconStyles} />

            {showTooltip && (
                <span
                    className={`${headerStyles ? 'top-[3rem]' : 'top-[1.5rem]'} bg-grey-02 text-black-01 invisible absolute border p-1 shadow-lg group-hover:visible group-hover:delay-500`}
                >
                    Close
                </span>
            )}
        </span>
    )
}

export default CloseButton
