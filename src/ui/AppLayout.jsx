import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SidebarNav from './SidebarNav'

function AppLayout() {
    return (
        <>
            <Header />
            <main className="flex h-full bg-yellow-400">
                <SidebarNav />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default AppLayout
