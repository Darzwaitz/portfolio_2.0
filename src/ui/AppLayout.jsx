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
                    <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
                        <Header />
                        {/* NB flex here on <main> needed for sidebar toggle in SidebarNav*/}
                        {/* <main className="bg-yellow-400 flex h-[calc(100vh-72px)] w-full"> */}
                        <main className="bg-yellow-400 flex w-full ">
                            <SidebarNav />

                            <section className="relative -z-10 w-full  bg-black-01  text-grey-01">
                                <section className="pl-14 pt-9">
                                    <Outlet />
                                </section>
                                <Terminal />
                            </section>
                        </main>
                        <Footer />
                    </div>
                </CurPageProvider>
            </FilteritemsProvider>
        </PanelsProvider>
    )
}

export default AppLayout
