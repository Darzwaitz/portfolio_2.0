import { usePanels } from '@/contexts/PanelsContext'

function Terminal() {
    const { togglePanels } = usePanels()
    return togglePanels.toggleTerminal ? (
        <div
            role="terminal"
            className="absolute bottom-0 h-6 w-full bg-grey-02"
        >
            <h1>Terminal temp.</h1>
        </div>
    ) : (
        ''
    )
}

export default Terminal
