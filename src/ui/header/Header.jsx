import { Link } from 'react-router-dom'
import NavTop from './NavTop'
import Logo from '../Logo'
import HeaderSearchnavbar from './HeaderSearchnavbar'
import HeaderTogglepanels from './togglebuttons/TogglePanels'
import HeaderWindowbuttons from './HeaderWindowbuttons'

function Header() {
    return (
        <header className="bg-neutral-300 flex flex-wrap items-center gap-2 border-b border-grey-03 bg-black-01 p-3 text-grey-01 ">
            <Link to="/">
                <Logo />
            </Link>

            <NavTop />
            <HeaderSearchnavbar />
            <HeaderTogglepanels />
            <HeaderWindowbuttons />
        </header>
    )
}

export default Header
