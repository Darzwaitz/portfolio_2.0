import { Link } from 'react-router-dom'
import NavTop from './NavTop'
import Logo from './Logo'

function Header() {
    return (
        <header className="border-grey-03 bg-black-01 flex flex-wrap items-center border-b bg-neutral-300 p-3 ">
            <Link to="/">
                <Logo />
            </Link>

            <NavTop />
        </header>
    )
}

export default Header
