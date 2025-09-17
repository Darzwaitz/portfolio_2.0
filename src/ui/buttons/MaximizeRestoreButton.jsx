import MaximizeButtonIcon from './assets/imgs/svgs/components/MaximizeButtonIcon'
import RestoreButtonIcon from './assets/imgs/svgs/components/RestoreButtonIcon'

function MaximizeRestoreButton({
    maximize,
    onClick,
    headerStyles,
    portfolioStyles,
}) {
    let buttonStyles = ''
    let iconStyles = ''
    let commonStyles = ''

    if (headerStyles) {
        iconStyles = 'm-auto h-6 p-1'
        commonStyles = 'flex w-[2.9rem] h-full self-center'
        buttonStyles = 'hover:text-grey-02b hover:bg-grey-08'
    }
    if (portfolioStyles) {
        iconStyles = 'm-auto h-6 p-1'
        buttonStyles = 'hover:bg-grey-08 w-[2rem]'
    }
    return (
        <span className={`${commonStyles} ${buttonStyles}`} onClick={onClick}>
            {/* <MaximizeButtonIcon />
            <RestoreButtonIcon /> */}
            {maximize ? (
                <RestoreButtonIcon iconStyles={iconStyles} />
            ) : (
                <MaximizeButtonIcon iconStyles={iconStyles} />
            )}
        </span>
    )
}

export default MaximizeRestoreButton
