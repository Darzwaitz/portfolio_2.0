import SvgSectionWrapper from '@/assets/imgs/svg/components/SvgSectionWrapper'

import CustomizeLayoutButton from './buttons/CustomizeLayoutButton'
import ToggleSidebarLeftButton from './buttons/ToggleSidebarLeftButton'
import ToggleTerminalButton from './buttons/ToggleTerminalButton'
import ToggleSidebarRightButton from './buttons/ToggleSidebarRightButton'

import useGetDataAttr from '@/hooks/useGetDataAttr'

import { SvgSettingsMedium } from '../../assets/imgs/svg/components/SvgSettings'
const { hover } = SvgSettingsMedium()

function TogglePanels({ tooltips, customizeLayoutStyles, headerStyles }) {
    const onGetDataAttr = useGetDataAttr()

    const togglePanelsStyles = `text-grey-06 z-50 rounded-sm p-[3px] ${hover}`

    let showTooltip = true
    if (!tooltips) showTooltip = false

    let customStyles = ''
    if (headerStyles) customStyles = 'flex gap-2 ml-auto'
    if (customizeLayoutStyles) customStyles = 'flex gap-2 flex-col'

    // N.B. onClick is added to parent SvgIconwrapper for all of these comps.
    return (
        <SvgSectionWrapper
            onClick={onGetDataAttr}
            id={'panels-svg-wrapper'}
            customStyles={customStyles}
        >
            <CustomizeLayoutButton
                showTooltip={showTooltip}
                customStyles={togglePanelsStyles}
            />

            <ToggleSidebarLeftButton
                showTooltip={showTooltip}
                customStyles={togglePanelsStyles}
            />
            <ToggleTerminalButton
                showTooltip={showTooltip}
                customStyles={togglePanelsStyles}
            />
            <ToggleSidebarRightButton
                showTooltip={showTooltip}
                customStyles={togglePanelsStyles}
            />
        </SvgSectionWrapper>
    )
}

export default TogglePanels
