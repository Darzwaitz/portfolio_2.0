import SvgSectionWrapper from '../../assets/imgs/svg/components/SvgSectionWrapper'

import ToggleTerminal from './assets/imgs/svg/components/ToggleTerminal'
import ToggleSidebarLeft from './assets/imgs/svg/components/ToggleSidebarLeft'
import ToggleSidebarRight from './assets/imgs/svg/components/ToggleSidebarRight'
import CustomizeLayout from './assets/imgs/svg/components/CustomizeLayout'

function TogglePanels({ tooltips, headerStyles }) {
    // flexcolumn = 'test'
    // console.log('tog panelz: ' + flexcolumn)

    // condition to show tooltip sent in from parent
    let showTooltip = true
    if (!tooltips) showTooltip = false

    let customStyles = ''
    if (headerStyles) {
        customStyles = 'gap-2 flex-col'
    } else {
        customStyles = 'test again'
    }

    // N.B. onClick is added to parent SvgIconwrapper for all of these comps.
    return (
        // <div className={`flex gap-2 ${flexcolumn && 'flex-col'}`}>
        <SvgSectionWrapper customStyles={customStyles}>
            <CustomizeLayout showTooltip={showTooltip} />
            <ToggleSidebarLeft showTooltip={showTooltip} />
            <ToggleTerminal showTooltip={showTooltip} />
            <ToggleSidebarRight showTooltip={showTooltip} />
        </SvgSectionWrapper>
    )
}

export default TogglePanels
