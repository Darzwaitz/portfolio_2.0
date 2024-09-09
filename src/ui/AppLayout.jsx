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
                        {/* NB flex here on <main> needed for sidebar toggle in SidebarNav*/}
                        <main className="bg-yellow-400 flex h-full w-full ">
                            <SidebarNav />
                            <section className="flex h-full w-full flex-col justify-between overflow-y-scroll bg-black-01  text-grey-01">
                                <div className="pl-14 pt-9">
                                    <Outlet />
                                </div>
                                <Terminal />
                            </section>
                        </main>
                        <Footer />
                    </AppContainer>
                </CurPageProvider>
            </FilteritemsProvider>
        </PanelsProvider>
    )
}

export default AppLayout
