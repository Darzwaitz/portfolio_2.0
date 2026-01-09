import MaximizeButtonIcon from './assets/imgs/svgs/components/MaximizeButtonIcon'
import RestoreButtonIcon from './assets/imgs/svgs/components/RestoreButtonIcon'

function MaximizeRestoreButton({
    maximize,
    onClick,
    headerStyles,
    portfolioStyles,
    handleMaximizeHeader,
}) {
    let buttonStyles = ''
    let iconStyles = ''
    let commonStyles = ''

    if (headerStyles) {
        iconStyles = 'm-auto h-6 p-1'
        commonStyles = 'flex w-[2.9rem] h-full self-center'
        buttonStyles = 'hover:text-grey-02b hover:bg-grey-08'
        onClick = handleMaximizeHeader
        maximize = !maximize
    }
    if (portfolioStyles) {
        iconStyles = 'm-auto h-6 p-1'
        buttonStyles = 'hover:bg-grey-08 w-[2rem]'
    }
    return (
        <span
            className={`${commonStyles} ${buttonStyles} group`}
            onClick={onClick}
        >
            {maximize ? (
                <RestoreButtonIcon iconStyles={iconStyles} />
            ) : (
                <MaximizeButtonIcon iconStyles={iconStyles} />
            )}
            <span
                className={`${headerStyles ? 'top-[3rem]' : 'top-[1.5rem]'} bg-grey-02 text-black-01 invisible absolute border p-1 shadow-lg group-hover:visible group-hover:delay-500`}
            >
                {maximize ? 'Restore' : 'Maximize'}
            </span>
        </span>
    )
}

export default MaximizeRestoreButton
