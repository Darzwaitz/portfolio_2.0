import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './header/Header'
import SidebarNav from './SidebarNav'
import Terminal from '../features/terminal/Terminal'
import Footer from './Footer'
import { PanelsProvider } from '../contexts/PanelsContext'

function AppLayout() {
    const [togglePanels, setTogglePanels] = useState({
        toggleLeft: true,
        toggleTerminal: false,
        togglePanelOptions: false,
        toggleRight: false,
    })

    function handleTogglePanels() {
        console.log('clicked')
        setTogglePanels((prev) => {
            return { ...prev, toggleLeft: !togglePanels.toggleLeft }
        })
    }

    return (
        <PanelsProvider>
            <Header
                togglePanels={togglePanels}
                onSetTogglePanels={handleTogglePanels}
            />
            <main className="bg-yellow-400 flex h-[calc(100vh-72px)] w-full">
                {/* <SidebarNav onTogglePanels={handleTogglePanels} /> */}

                {togglePanels.toggleLeft === true && <SidebarNav />}

                <section className="relative -z-10 w-full bg-black-01 text-grey-01">
                    <Outlet />
                    <Terminal />
                </section>
                {/* tmp for testing */}
                {/* <SidebarNav /> */}
            </main>
            <Footer />
        </PanelsProvider>
    )
}

export default AppLayout
