// import { Outlet, useOutletContext } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Terminal from '../features/terminal/Terminal'
import { usePanels } from '../contexts/PanelsContext'

export default function MainContent() {
    const { togglePanels } = usePanels()

    // const testFunc = function () {
    //     console.log('testFunc CALLED')
    // }

    return (
        <main
            className={`bg-black-01 text-grey-01 grid w-full ${togglePanels.toggleTerminal ? 'grid-rows-[1fr]' : 'grid-rows-[1fr]_auto'}`}
        >
            <div
                id="outlet"
                // hide scrollbar
                style={{ scrollbarWidth: 'none' }}
                className="bg-black-02 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8"
            >
                {/* <Outlet context={{ testFunc }} /> */}
                <Outlet />
            </div>
            <Terminal />
        </main>
    )
}

// export function useTestFunc() {
//     return useOutletContext()
// }
