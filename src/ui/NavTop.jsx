import { Link } from 'react-router-dom'

function NavTop() {
    return (
        <nav className="text-grey-01 flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default NavTop
