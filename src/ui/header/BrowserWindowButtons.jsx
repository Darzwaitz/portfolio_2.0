import MinimizeButtonIcon from '../buttons/assets/imgs/svgs/components/MinimizeButtonIcon'
import RestoreButtonIcon from '@/ui/buttons/assets/imgs/svgs/components/RestoreButtonIcon'
import MaximizeButtonIcon from '../buttons/assets/imgs/svgs/components/MaximizeButtonIcon'
import CloseButtonIcon from '../buttons/assets/imgs/svgs/components/CloseButtonIcon'

function BrowserWindowButtons({ HeaderStyles, OtherStyles }) {
    return (
        // <div className="hidden gap-2 pl-1 lg:flex">
        <div
            className={`${HeaderStyles && 'hidden gap-2 pl-1 lg:flex'} ${OtherStyles && 'flex gap-2 pl-1'}`}
        >
            {/* // OtherStyles && ''}> */}
            <MinimizeButtonIcon />
            <MaximizeButtonIcon />
            <RestoreButtonIcon />
            <CloseButtonIcon />
        </div>
    )
}

export default BrowserWindowButtons
