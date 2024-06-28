import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import SidebarNav from './sidebar/SidebarNav'
import Terminal from '../features/terminal/Terminal'
import Footer from './Footer'
import { PanelsProvider } from '../contexts/PanelsContext'

function AppLayout() {
    return (
        <PanelsProvider>
            <Header />
            <main className="bg-yellow-400 flex h-[calc(100vh-72px)] w-full">
                {/* {togglePanels.toggleLeft === true && <SidebarNav />} */}
                <SidebarNav />

                <section className="relative -z-10 w-full bg-black-01 pl-14 pt-9 text-grey-01">
                    <Outlet />
                    <Terminal />
                </section>
            </main>
            <Footer />
        </PanelsProvider>
    )
}

export default AppLayout
