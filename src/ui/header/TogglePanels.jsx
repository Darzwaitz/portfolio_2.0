import SvgSectionWrapper from '../../assets/imgs/svg/components/SvgSectionWrapper'

import CustomizeLayoutButton from './buttons/CustomizeLayoutButton'
import ToggleSidebarLeftButton from './buttons/ToggleSidebarLeftButton'
import ToggleTerminalButton from './buttons/ToggleTerminalButton'
import ToggleSidebarRightButton from './buttons/ToggleSidebarRightButton'

function TogglePanels({ tooltips, customizeLayoutStyles, headerStyles }) {
    // condition to show tooltip - set on parent
    let showTooltip = true
    if (!tooltips) showTooltip = false

    let customStyles = ''
    if (headerStyles) customStyles = 'flex gap-2'
    if (customizeLayoutStyles) customStyles = 'flex gap-2 flex-col'

    // N.B. onClick is added to parent SvgIconwrapper for all of these comps.
    return (
        <SvgSectionWrapper customStyles={customStyles}>
            <CustomizeLayoutButton showTooltip={showTooltip} />
            <ToggleSidebarLeftButton showTooltip={showTooltip} />
            <ToggleTerminalButton showTooltip={showTooltip} />
            <ToggleSidebarRightButton showTooltip={showTooltip} />
        </SvgSectionWrapper>
    )
}

export default TogglePanels
