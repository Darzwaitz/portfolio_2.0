import AppContainer from './AppContainer'
import Header from './header/Header'
import SidebarNav from './sidebar/SidebarNav'
import MainContent from './MainContent'
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
                            <MainContent />
                        </section>
                        <Footer />
                    </AppContainer>
                </CurPageProvider>
            </FilteritemsProvider>
        </PanelsProvider>
    )
}

export default AppLayout
