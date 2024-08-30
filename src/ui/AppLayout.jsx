import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import SidebarNav from './sidebar/SidebarNav'
import Terminal from '../features/terminal/Terminal'
import Footer from './Footer'
import { PanelsProvider } from '../contexts/PanelsContext'
import { FilteritemsProvider } from '../contexts/FilteritemsContext'
import { CurPageProvider } from '../contexts/CurPageContext'

function AppLayout() {
    return (
        <PanelsProvider>
            <FilteritemsProvider>
                <CurPageProvider>
                    <Header />
                    {/* NB flex here on <main> needed for sidebar toggle in SidebarNav*/}
                    <main className="bg-yellow-400 flex h-[calc(100vh-72px)] w-full">
                        <SidebarNav />

                        <section className="relative w-full bg-black-01 pl-14 pt-9 text-grey-01">
                            <Outlet />
                            <Terminal />
                        </section>
                    </main>
                    <Footer />
                </CurPageProvider>
            </FilteritemsProvider>
        </PanelsProvider>
    )
}

export default AppLayout
