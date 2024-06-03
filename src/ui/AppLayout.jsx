import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './header/Header'
import SidebarNav from './SidebarNav'
import Terminal from '../features/terminal/Terminal'
import Footer from './Footer'

function AppLayout() {
    const [togglePanels, setTogglePanels] = useState({
        toggleLeft: true,
        toggleTerminal: false,
        togglePanelOptions: false,
        toggleRight: false,
    })
    function handleTogglePanels(panel) {
        setTogglePanels((t) => ({ ...togglePanels }))
    }
    return (
        <>
            <Header />
            <main className="bg-yellow-400 flex h-[calc(100vh-72px)] w-full">
                <SidebarNav />

                <section className="relative -z-10 w-full bg-black-01 text-grey-01">
                    <Outlet />
                    <Terminal />
                </section>
                {/* tmp for testing */}
                {/* <SidebarNav /> */}
            </main>
            <Footer />
        </>
    )
}

export default AppLayout
