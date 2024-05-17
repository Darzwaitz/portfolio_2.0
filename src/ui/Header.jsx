import { Link } from 'react-router-dom'
import NavTop from './NavTop'
import Logo from './Logo'

function Header() {
    return (
        <header className="flex flex-wrap items-center border-b border-red-600 bg-neutral-300 p-3 ">
            <Link to="/">
                <Logo />
            </Link>

            <NavTop />
        </header>
    )
}

export default Header
