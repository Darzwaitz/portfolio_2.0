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
                        {/* NB flex here on <section> needed for sidebar toggle in SidebarNav - Grid tested/not good for this*/}
                        {/* KEEP <main> semantically within <section> because <sidebar> shouldn't go within <main>*/}
                        <section className="flex h-full w-full">
                            <SidebarNav />
                            {/* <main className="bg-black-01 text-grey-01 relative flex h-full w-full flex-col justify-between overflow-y-auto"> */}
                            <main className="bg-black-01 text-grey-01 relative flex w-full flex-col overflow-y-auto">
                                {/* <div className="@container w-full p-9"> */}
                                {/* <div className="w-full p-9">  */}
                                {/* <div className=""> */}
                                <Outlet />
                                <Terminal />
                                {/* </div> */}
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
