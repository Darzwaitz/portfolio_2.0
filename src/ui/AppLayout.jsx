import { Outlet } from 'react-router-dom'
import Header from './Header'
// import Footer from './Footer'
import SidebarNav from './SidebarNav'

function AppLayout() {
    return (
        <>
            <Header />
            <main className="bg-yellow-400 flex h-[calc(100vh-72px)] w-full">
                {/* <SidebarNav /> */}

                <section className="w-full bg-black-01 text-grey-01">
                    <Outlet />
                </section>
                <SidebarNav />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default AppLayout
