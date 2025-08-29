import MinimizeButton from './assets/imgs/svgs/components/MinimizeButton'
import RestoreButton from './assets/imgs/svgs/components/RestoreButton'
import MaximizeButton from './assets/imgs/svgs/components/MaximizeButton'
import CloseButton from './assets/imgs/svgs/components/CloseButton'

function BrowserWindowButtons({ HeaderStyles, OtherStyles }) {
    return (
        // <div className="hidden gap-2 pl-1 lg:flex">
        <div
            className={`${HeaderStyles && 'hidden gap-2 pl-1 lg:flex'} ${OtherStyles && 'flex gap-2 pl-1'}`}
        >
            {/* // OtherStyles && ''}> */}
            <MinimizeButton />
            <MaximizeButton />
            <RestoreButton />
            <CloseButton />
        </div>
    )
}

export default BrowserWindowButtons
