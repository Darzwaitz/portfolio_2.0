import { RouterProvider, createBrowserRouter } from 'react-router'
import AppLayout from './ui/AppLayout'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import About from './pages/About'
import PortfolioPage from './pages/PortfolioPage'
import Contact from './pages/Contact'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
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
        ],
    },
])
function App() {
    return <RouterProvider router={router} />
}

export default App
