import MinimizeButtonIcon from '../buttons/MinimizeButtonIcon'
import MaximizeButtonIcon from '../buttons/MaximizeButtonIcon'

function HeaderWindowbuttons() {
    return (
        <div className="hidden gap-2 pl-1 lg:flex">
            <MinimizeButtonIcon />
            <MaximizeButtonIcon />
            {/* <div className="text-grey-01 p-1">X</div> */}
        </div>
    )
}

export default HeaderWindowbuttons
