import { usePanels } from '@/contexts/PanelsContext'

function Terminal() {
    const { togglePanels } = usePanels()
    return togglePanels.toggleTerminal ? (
        <section role="terminal" className=" sticky bottom-0 w-full bg-grey-02">
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
