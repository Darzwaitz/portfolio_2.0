import { usePanels } from '@/contexts/PanelsContext'

function Terminal() {
    const { togglePanels } = usePanels()
    return togglePanels.toggleTerminal ? (
        <section
            role="terminal"
            // className=" w-full bg-grey-02"
            className=" bg-grey-02"
            // className="absolute bottom-0 h-6 w-full bg-grey-02"
        >
            <h1 className="text-5xl">Terminal temp.</h1>
        </section>
    ) : (
        ''
    )
}

export default Terminal
