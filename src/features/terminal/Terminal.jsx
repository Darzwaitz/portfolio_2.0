import { usePanels } from '@/contexts/PanelsContext'

function Terminal() {
    const { togglePanels } = usePanels()
    return togglePanels.toggleTerminal ? (
        <section
            id="terminal"
            className="bg-grey-02 sticky bottom-0 left-0 mt-auto w-full"
        >
            {/* <section role="terminal" className="bg-grey-02 sticky bottom-0 w-fit">  */}
            <div>
                <h1>
                    18:51:56 [vite] hmr update
                    /src/features/terminal/Terminal.jsx, /src/index.css
                </h1>
                <p>⬜</p>
                <p>
                    <br />
                    <br />
                </p>
            </div>
        </section>
    ) : (
        ''
    )
}

export default Terminal
