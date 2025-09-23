import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import ToggleSidebarRightIcon from '../assets/imgs/svg/components/ToggleSidebarRightIcon'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize, arrowDirection, svgStylesMedium } =
    SvgSettingsMedium()
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

// on svg - off is default on load
// layout-sidebar-right.svg
// <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 14V2H9V14H2Z"/></svg>

function ToggleSidebarRight({ showTooltip }) {
    const { togglePanels } = usePanels()

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            {/* layout-sidebar-right-off.svg */}
            <ToggleSidebarRightIcon
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

export default ToggleSidebarRight
