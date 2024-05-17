import { Link } from 'react-router-dom'

function NavTop() {
    return (
        <nav className="flex gap-5">
            <Link to="/">File</Link>
            <Link to="/">Edit</Link>
            <Link to="/">Selection</Link>
            <Link to="/">View</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default NavTop
