import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize, arrowDirection } = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

// on svg - off is default on load
// <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 10.0007V2.00073H14V10.0007H2ZM2 11.0007H14V14.0007H2V11.0007Z"/></svg>

function ToggleTerminal() {
    const { togglePanels } = usePanels()

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            {/* layout-panel-off.svg */}
            {!togglePanels.toggleTerminal ? (
                <svg
                    className="pointer-events-none"
                    data-panel="toggleTerminal"
                    width="22"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={defaultColor}
                >
                    <path
                        className="pointer-events-none"
                        data-panel="toggleTerminal"
                        d="M2 1.00073L1 2.00073V14.0007L2 15.0007H14L15 14.0007V2.00073L14 1.00073H2ZM2 10.0007V2.00073H14V10.0007H2ZM2 11.0007H14V14.0007H2V11.0007Z"
                    />
                </svg>
            ) : (
                <svg
                    className="pointer-events-none"
                    data-panel="toggleTerminal"
                    width="22"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={defaultColor}
                >
                    <path
                        className="pointer-events-none"
                        data-panel="toggleTerminal"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 10V2H14V10H2Z"
                    />
                </svg>
            )}

            <Tooltip
                msg={'Toggle Panel (Ctrl+J)'}
                arrowDirection={arrowDirection}
            />
        </SvgIconwrapper>
    )
}

export default ToggleTerminal
