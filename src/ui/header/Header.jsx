import NavTop from './NavTop'
import Logo from './assets/imgs/Logo'
import HeaderSearchnavbar from './HeaderSearchnavbar'
import HeaderWindowbuttons from './HeaderWindowbuttons'
import TogglePanels from '../header/TogglePanels'
import NavArrows from './NavArrows'

function Header() {
    return (
        <header className="border-grey-03 bg-black-01 text-grey-01 sticky top-0 z-100 flex flex-wrap items-center gap-2 border-b bg-neutral-300 pl-3">
            <Logo />
            <nav className="block lg:hidden">
                <NavArrows />
            </nav>
            <NavTop />
            <HeaderSearchnavbar />
            <TogglePanels />
            <HeaderWindowbuttons />
        </header>
    )
}

export default Header
