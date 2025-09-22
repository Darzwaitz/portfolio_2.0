import SvgSectionWrapper from '../../assets/imgs/svg/components/SvgSectionWrapper'

import CustomizeLayoutButton from './assets/imgs/svg/components/CustomizeLayoutButton'
import ToggleTerminal from './assets/imgs/svg/components/ToggleTerminal'
import ToggleSidebarLeft from './assets/imgs/svg/components/ToggleSidebarLeft'
import ToggleSidebarRight from './assets/imgs/svg/components/ToggleSidebarRight'

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
            <ToggleSidebarLeft showTooltip={showTooltip} />
            <ToggleTerminal showTooltip={showTooltip} />
            <ToggleSidebarRight showTooltip={showTooltip} />
        </SvgSectionWrapper>
    )
}

export default TogglePanels
