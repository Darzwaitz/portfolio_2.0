import { RouterProvider, createBrowserRouter } from 'react-router'
import AppLayout from './ui/AppLayout'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import About from './pages/about/About'
import PortfolioPage from './pages/PortfolioPage'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import PageTemplate from './pages/PageTemplate'
import AboutPage from './pages/about/AboutPage'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/test',
                element: <PageTemplate pageContent={<AboutPage />} />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
])
function App() {
    return <RouterProvider router={router} />
}

export default App
