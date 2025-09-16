import CloseButtonIcon from './assets/imgs/svgs/components/CloseButtonIcon'

function CloseButton({
    asideMenuStyles,
    headerStyles,
    portfolioStyles,
    onToggleExplorer,
}) {
    let buttonStyles = ''
    let iconStyles = ''
    let commonStyles = ''

    if (asideMenuStyles) iconStyles = 'hover:bg-grey-08 h-6 p-1'
    if (headerStyles) {
        iconStyles = 'm-auto h-6 p-1'
        commonStyles = 'flex w-[2.4rem] h-full self-center'
        buttonStyles =
            'hover:bg-red-01 hover:text-grey-02b hover:text-red-01-01 '
    }
    // change hover to red after testing
    if (portfolioStyles) iconStyles = 'hover:bg-yellow-01 h-6 p-1'

    return (
        <span
            className={`${commonStyles} ${buttonStyles}`}
            onClick={onToggleExplorer}
        >
            <CloseButtonIcon iconStyles={iconStyles} />
        </span>
    )
}

export default CloseButton
