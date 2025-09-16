import MinimizeButtonIcon from './assets/imgs/svgs/components/MinimizeButtonIcon'

function MinimizeButton({ headerStyles, portfolioStyles }) {
    let commonStyles = ''
    let buttonStyles = ''
    let iconStyles = ''

    if (headerStyles) {
        iconStyles = 'm-auto h-6 p-1'
        commonStyles = 'flex w-[2.4rem] h-full self-center'
        buttonStyles = 'hover:text-grey-02b hover:bg-grey-08'
    }
    if (portfolioStyles) {
        iconStyles = 'm-auto h-6 p-1'
        buttonStyles = 'hover:bg-grey-08 w-[2rem]'
    }

    return (
        <span
            className={`${commonStyles} ${buttonStyles}`}
            // onClick={() => null}
        >
            <MinimizeButtonIcon iconStyles={iconStyles} />
        </span>
    )
}

export default MinimizeButton
