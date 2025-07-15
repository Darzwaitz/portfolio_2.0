import { Outlet } from 'react-router-dom'
import Terminal from '../features/terminal/Terminal'
import { usePanels } from '../contexts/PanelsContext'

function MainContent() {
    const { togglePanels } = usePanels()

    return (
        <main
            className={`bg-black-01 text-grey-01 grid w-full ${togglePanels.toggleTerminal ? 'grid-rows-[1fr]' : 'grid-rows-[1fr]_auto'}`}
        >
            <div
                id="outlet"
                className="overflow-auto p-8"
                // onClick={() => console.log('clikdd')}
            >
                <Outlet />
            </div>
            <Terminal />
        </main>
    )
}

export default MainContent
