import ToggleTerminal from './assets/imgs/svg/components/ToggleTerminal'
import ToggleSidebarLeft from './assets/imgs/svg/components/ToggleSidebarLeft'
import ToggleSidebarRight from './assets/imgs/svg/components/ToggleSidebarRight'
import CustomizeLayout from './assets/imgs/svg/components/CustomizeLayout'

function TogglePanels() {
    // N.B. onClick is added to parent SvgIconwrapper for all of these comps.
    return (
        <div className="flex gap-2">
            <CustomizeLayout />
            <ToggleSidebarLeft />
            <ToggleTerminal />
            <ToggleSidebarRight />
        </div>
    )
}

export default TogglePanels
