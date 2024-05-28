import { Link } from 'react-router-dom'
import NavTop from './NavTop'
import Logo from '../Logo'
import HeaderSearchnavbar from './HeaderSearchnavbar'
import HeaderTogglepanels from './HeaderTogglepanels'

function Header() {
    return (
        <header className="bg-neutral-300 flex flex-wrap items-center border-b border-grey-03 bg-black-01 p-3 ">
            <Link to="/">
                <Logo />
            </Link>

            <NavTop />
            <HeaderSearchnavbar />
            <HeaderTogglepanels />
        </header>
    )
}

export default Header
