// TODO state may go in this comp.
import ToggleTerminal from './assets/imgs/svg/components/ToggleTerminal'
import ToggleSidebarLeft from './assets/imgs/svg/components/ToggleSidebarLeft'
import ToggleSidebarRight from './assets/imgs/svg/components/ToggleSidebarRight'
import CustomizeLayout from './assets/imgs/svg/components/CustomizeLayout'

function TogglePanels({ togglePanels, onSetTogglePanels }) {
    return (
        <div className="flex gap-2">
            {/* svgs comps. */}

            <ToggleSidebarLeft
                onSetTogglePanels={onSetTogglePanels}
                togglePanels={togglePanels}
            />
            <ToggleTerminal />
            <ToggleSidebarRight />
            <CustomizeLayout />
        </div>
    )
}

export default TogglePanels
