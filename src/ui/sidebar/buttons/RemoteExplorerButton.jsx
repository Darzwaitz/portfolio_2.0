// remote-explorer.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import RemoteExplorerIcon from '../assets/imgs/svg/components/RemoteExplorerIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

function RemoteExplorerButton() {
    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <RemoteExplorerIcon hover={hover} defaultColor={defaultColor} />

            <Tooltip msg={'Showcase Projects'} arrowDirection={arrDir} />
        </SvgIconwrapper>
    )
}

export default RemoteExplorerButton
