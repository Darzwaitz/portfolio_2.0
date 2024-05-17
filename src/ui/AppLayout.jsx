import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SidebarNav from './SidebarNav'

function AppLayout() {
    return (
        <>
            <Header />
            <main className="flex h-[calc(100vh-72px)] w-full bg-yellow-400">
                <SidebarNav />
                <section className="bg-black-01 text-grey-01 w-full">
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AppLayout
