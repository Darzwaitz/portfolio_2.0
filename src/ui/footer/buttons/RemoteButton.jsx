import SvgIconwrapper from '../../../assets/imgs/svg/components/SvgIconwrapper'
import RemoteIcon from '../assets/imgs/svg/components/RemoteIcon'

function RemoteButton() {
    return (
        // <span className="bg-blue-01 hover:text-grey-02 text-grey-02 hover:bg-blue-02 inline-block h-6 w-10 py-1">
        <SvgIconwrapper iconSize={'medium'}>
            <RemoteIcon />
        </SvgIconwrapper>
    )
}

export default RemoteButton
