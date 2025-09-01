import MinimizeButton from './MinimizeButton'
import MaximizeRestoreButton from './MaximizeRestoreButton'
import CloseButton from './CloseButton'

function WindowDisplayButtons({
    HeaderStyles,
    PortfolioItemStyles,
    maximize,
    onClick,
    id,
}) {
    return (
        <div
            id={id}
            className={`${HeaderStyles ? 'hidden h-full gap-2 pl-1 lg:flex' : ''} ${PortfolioItemStyles ? 'ml-auto flex gap-0.5' : ''}`}
        >
            <MinimizeButton />
            <MaximizeRestoreButton maximize={maximize} onClick={onClick} />
            <CloseButton />
        </div>
    )
}

export default WindowDisplayButtons
