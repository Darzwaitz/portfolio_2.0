// TODO state may go in this comp.
import ToggleSidebar from './ToggleSidebar'
// import ToggleTerminal from './ToggleTerminal'

function TogglePanels() {
    return (
        <div className="flex gap-2">
            <ToggleSidebar />
            <ToggleSidebar />
            {/* <ToggleTerminal /> */}
            <ToggleSidebar />
            <ToggleSidebar />
        </div>
    )
}

export default TogglePanels
