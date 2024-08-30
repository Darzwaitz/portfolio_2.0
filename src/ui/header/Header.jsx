import NavTop from './NavTop'
import Logo from './assets/imgs/Logo'
import HeaderSearchnavbar from './HeaderSearchnavbar'
import HeaderWindowbuttons from './HeaderWindowbuttons'
import TogglePanels from '../header/TogglePanels'

function Header() {
    return (
        <header className="bg-neutral-300 relative z-10 flex flex-wrap items-center gap-2 border-b border-grey-03 bg-black-01 p-3 text-grey-01 ">
            <Logo />
            <NavTop />
            <HeaderSearchnavbar />
            <TogglePanels />
            <HeaderWindowbuttons />
        </header>
    )
}

export default Header
