// TODO state may go in this comp.
import ToggleTerminal from './ToggleTerminal'
import ToggleSidebarLeft from './ToggleSidebarLeft'
import ToggleSidebarRight from './ToggleSidebarRight'
import CustomizeLayout from './CustomizeLayout'

function TogglePanels() {
    return (
        <div className="flex gap-2">
            <ToggleSidebarLeft />
            <ToggleTerminal />
            <ToggleSidebarRight />
            <CustomizeLayout />
        </div>
    )
}

export default TogglePanels
