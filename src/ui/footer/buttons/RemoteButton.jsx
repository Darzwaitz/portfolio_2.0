import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import RemoteIcon from '../assets/imgs/svg/components/RemoteIcon'

import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, hover } = SvgSettingsMedium()

function RemoteButton() {
    const remoteButtonStyles =
        'bg-blue-01 h-full text-grey-02 hover:text-grey-06b hover:bg-blue-02 w-10'
    return (
        <SvgIconwrapper
            iconSize={iconSize}
            hover={hover}
            customStyles={remoteButtonStyles}
        >
            <RemoteIcon defaultColor={defaultColor} />
        </SvgIconwrapper>
    )
}

export default RemoteButton
