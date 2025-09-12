import SvgSectionWrapper from '../../assets/imgs/svg/components/SvgSectionWrapper'

import ToggleTerminal from './assets/imgs/svg/components/ToggleTerminal'
import ToggleSidebarLeft from './assets/imgs/svg/components/ToggleSidebarLeft'
import ToggleSidebarRight from './assets/imgs/svg/components/ToggleSidebarRight'
import CustomizeLayout from './assets/imgs/svg/components/CustomizeLayout'

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
            <CustomizeLayout showTooltip={showTooltip} />
            <ToggleSidebarLeft showTooltip={showTooltip} />
            <ToggleTerminal showTooltip={showTooltip} />
            <ToggleSidebarRight showTooltip={showTooltip} />
        </SvgSectionWrapper>
    )
}

export default TogglePanels
