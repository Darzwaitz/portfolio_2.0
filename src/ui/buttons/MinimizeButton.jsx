import MinimizeButtonIcon from './assets/imgs/svgs/components/MinimizeButtonIcon'

function MinimizeButton({ headerStyles, portfolioStyles }) {
    let commonStyles = ''
    let buttonStyles = ''
    let iconStyles = ''

    if (headerStyles) {
        iconStyles = 'm-auto h-6 p-1'
        commonStyles = 'flex w-[3rem] h-full self-center'
        buttonStyles = 'hover:text-grey-02b hover:bg-grey-08'
    }
    if (portfolioStyles) {
        iconStyles = 'm-auto h-6 p-1'
        buttonStyles = 'hover:bg-grey-08 w-[2rem]'
    }

    return (
        <span
            className={`${commonStyles} ${buttonStyles} group`}
            // onClick={() => null}
        >
            <MinimizeButtonIcon iconStyles={iconStyles} />
            <span className="bg-grey-02 text-black-01 invisible absolute top-[112%] border p-1 shadow-lg delay-500 group-hover:visible">
                tooltip
            </span>
        </span>
    )
}

export default MinimizeButton
