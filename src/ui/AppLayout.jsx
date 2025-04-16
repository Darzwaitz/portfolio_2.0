import { Outlet } from 'react-router-dom'
import AppContainer from './AppContainer'
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
                    <AppContainer>
                        <Header />
                        {/* NB flex here on <section> needed for sidebar toggle in SidebarNav*/}
                        {/* grid in AppContainer to be used in 2.0 */}
                        <section className="flex h-full w-full bg-yellow-400">
                            <SidebarNav />
                            <main className="bg-black-01 text-grey-01 flex h-full w-full flex-col justify-between overflow-y-scroll">
                                <div className="p-9">
                                    <Outlet />
                                </div>
                                <Terminal />
                            </main>
                        </section>
                        <Footer />
                    </AppContainer>
                </CurPageProvider>
            </FilteritemsProvider>
        </PanelsProvider>
    )
}

export default AppLayout
