import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize, arrowDirection } = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

// on svg - off is default on load
// <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H9V14.0007H2ZM10 14.0007V2.00073H14V14.0007H10Z"/></svg>

function ToggleSidebarRight() {
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            {/* layout-sidebar-right-off.svg */}
            <svg
                width="22"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={defaultColor}
            >
                <path d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H9V14.0007H2ZM10 14.0007V2.00073H14V14.0007H10Z" />
            </svg>

            <Tooltip
                msg={'Toggle Primary Sidebar (Ctrl+B)'}
                arrowDirection={arrowDirection}
            />
        </SvgIconwrapper>
    )
}

export default ToggleSidebarRight
