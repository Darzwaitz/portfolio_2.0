//  source-control.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import SourceControlIcon from '../assets/imgs/svg/components/SourceControlIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

function SourceControlButton() {
    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <SourceControlIcon hover={hover} defaultColor={defaultColor} />

            <Tooltip
                msg={'All Projects (Ctrl+Shift+G)'}
                arrowDirection={arrDir}
            />
        </SvgIconwrapper>
    )
}

export default SourceControlButton
