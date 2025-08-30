import MaximizeButtonIcon from './assets/imgs/svgs/components/MaximizeButtonIcon'
import RestoreButtonIcon from './assets/imgs/svgs/components/RestoreButtonIcon'

function MaximizeRestoreButton({ maximize, onClick }) {
    return (
        <span onClick={onClick}>
            {/* <MaximizeButtonIcon />
            <RestoreButtonIcon /> */}
            {maximize ? <RestoreButtonIcon /> : <MaximizeButtonIcon />}
        </span>
    )
}

export default MaximizeRestoreButton
