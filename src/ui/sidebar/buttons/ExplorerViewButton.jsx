// files.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import ExplorerViewIcon from '../assets/imgs/svg/components/ExplorerViewIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

function ExplorerViewButton({ onToggleExplorer }) {
    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir

    return (
        <SvgIconwrapper
            iconSize={iconSize}
            onClick={onToggleExplorer}
            hover={hover}
        >
            <ExplorerViewIcon hover={hover} defaultColor={defaultColor} />
            <Tooltip msg={'Explorer (Ctrl+Shift+E)'} arrowDirection={arrDir} />
        </SvgIconwrapper>
    )
}

export default ExplorerViewButton
