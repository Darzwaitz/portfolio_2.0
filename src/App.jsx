import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import PortfolioPage from './pages/PortfolioPage'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
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
