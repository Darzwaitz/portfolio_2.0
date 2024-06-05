import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize, arrowDirection } = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

// off svg
// <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H6V14.0007H2ZM7 14.0007V2.00073H14V14.0007H7Z"/></svg>

function ToggleSidebarLeft() {
    const { togglePanels, handleTogglePanels } = usePanels()
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            {/* layout-sidebar-left.svg */}

            <svg
                onClick={handleTogglePanels}
                width="22"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={defaultColor}
            >
                {togglePanels.toggleLeft ? (
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM14 14H7V2H14V14Z"
                    />
                ) : (
                    !togglePanels.toggleLeft && (
                        <path d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 14.0007V2.00073H6V14.0007H2ZM7 14.0007V2.00073H14V14.0007H7Z" />
                    )
                )}
            </svg>
            <Tooltip
                msg={'Toggle Primary Sidebar (Ctrl+B)'}
                arrowDirection={arrowDirection}
            />
        </SvgIconwrapper>
    )
}

export default ToggleSidebarLeft
