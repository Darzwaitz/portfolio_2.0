import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
import ToggleTerminalIcon from '../assets/imgs/svg/components/ToggleTerminalIcon'
const { defaultColor, hover, iconSize, arrowDirection, svgStylesMedium } =
    SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

function ToggleTerminal({ showTooltip }) {
    const { togglePanels } = usePanels()
    // let arrDir = togglePanels.tooltipArrDir

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <ToggleTerminalIcon
                defaultColor={defaultColor}
                svgStylesMedium={svgStylesMedium}
                iconSize={iconSize}
                togglePanels={togglePanels}
            />
            {showTooltip && (
                <Tooltip
                    msg={'Toggle Panel (Ctrl+J)'}
                    arrowDirection={arrowDirection}
                />
            )}
        </SvgIconwrapper>
    )
}

export default ToggleTerminal
