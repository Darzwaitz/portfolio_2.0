import CloseButtonIcon from './assets/imgs/svgs/components/CloseButtonIcon'

function CloseButton({
    asideMenuStyles,
    headerStyles,
    portfolioStyles,
    onToggleExplorer,
}) {
    let customStyles = ''
    if (asideMenuStyles) customStyles = 'hover:bg-grey-08 h-6 p-1'
    if (headerStyles) customStyles = 'hover:bg-blue-01 h-6 p-1'
    if (portfolioStyles) customStyles = 'hover:bg-yellow-01 h-6 p-1'

    return (
        <span className="self-center" onClick={onToggleExplorer}>
            <CloseButtonIcon customStyles={customStyles} />
        </span>
    )
}

export default CloseButton
