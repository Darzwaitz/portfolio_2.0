import ToggleTerminal from './assets/imgs/svg/components/ToggleTerminal'
import ToggleSidebarLeft from './assets/imgs/svg/components/ToggleSidebarLeft'
import ToggleSidebarRight from './assets/imgs/svg/components/ToggleSidebarRight'
import CustomizeLayout from './assets/imgs/svg/components/CustomizeLayout'

function TogglePanels({ flexcolumn, tooltips }) {
    // condition to show tooltip sent in from parent
    let showTooltip = true
    if (!tooltips) showTooltip = false

    // N.B. onClick is added to parent SvgIconwrapper for all of these comps.
    return (
        <div className={`flex gap-2 ${flexcolumn && 'flex-col'}`}>
            <CustomizeLayout showTooltip={showTooltip} />
            <ToggleSidebarLeft showTooltip={showTooltip} />
            <ToggleTerminal showTooltip={showTooltip} />
            <ToggleSidebarRight showTooltip={showTooltip} />
        </div>
    )
}

export default TogglePanels
