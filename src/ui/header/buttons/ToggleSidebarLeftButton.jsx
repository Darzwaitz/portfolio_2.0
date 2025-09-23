import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import ToggleSidebarLeftIcon from '../assets/imgs/svg/components/ToggleSidebarLeftIcon'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// different arrowDirection settings location for these icons
const { defaultColor, hover, iconSize, arrowDirection, svgStylesMedium } =
    SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

function ToggleSidebarLeftButton({ showTooltip }) {
    const { togglePanels } = usePanels()
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <ToggleSidebarLeftIcon
                defaultColor={defaultColor}
                svgStylesMedium={svgStylesMedium}
                iconSize={iconSize}
                togglePanels={togglePanels}
            />
            {showTooltip && (
                <Tooltip
                    msg={'Toggle Primary Sidebar (Ctrl+B)'}
                    arrowDirection={arrowDirection}
                />
            )}
        </SvgIconwrapper>
    )
}

export default ToggleSidebarLeftButton
