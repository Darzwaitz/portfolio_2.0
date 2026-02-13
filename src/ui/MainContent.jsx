// import { Outlet, useOutletContext } from 'react-router-dom'
import { Outlet } from 'react-router'
import Terminal from '../features/terminal/Terminal'
import { usePanels } from '../contexts/PanelsContext'
import AsideNumbers from './AsideNumbers'

export default function MainContent() {
    const { togglePanels } = usePanels()

    // const testFunc = function () {
    //     console.log('testFunc CALLED')
    // }
    const sidetrackNumbers = 30

    return (
        <main
            className={`bg-black-01 text-grey-01 grid w-full ${togglePanels.toggleTerminal ? 'grid-rows-[1fr]' : 'grid-rows-[1fr]_auto'}`}
        >
            <section
                id="outlet"
                // hide scrollbar
                style={{ scrollbarWidth: 'none' }}
                // className="bg-black-02 grid grid-cols-2 grid-cols-[] overflow-auto"
                className="bg-black-02 flex flex-col overflow-auto"
            >
                {/* breadcrumb nav to go here */}
                {/* <div>
                    <span className="pl-1"></span>
                </div> */}
                <div className="flex">
                    {/* sidebar numbers */}
                    <AsideNumbers sidetrackNumbers={sidetrackNumbers} />
                    {/* / sidebar numbers */}

                    <div className="w-fit pt-6">
                        <Outlet />
                    </div>
                </div>
            </section>
            <Terminal />
        </main>
    )
}
