import NavPages from './NavPages'
import Logo from './assets/imgs/Logo'
import HeaderSearchnavbar from './HeaderSearchnavbar'
import WindowDisplayButtons from '@/ui/buttons/WindowDisplayButtons'
import TogglePanels from '../header/TogglePanels'
import NavArrows from './NavArrows'
import { useState } from 'react'

function Header() {
    // initially display 'restore' button
    const [maximize, setMaximize] = useState(true)

    return (
        <header className="border-grey-03 bg-black-01 text-grey-01 sticky top-0 z-100 flex flex-wrap items-center gap-2 border-b bg-neutral-300 px-3 lg:pr-0">
            <Logo />
            <nav className="block lg:hidden">
                <NavArrows />
            </nav>
            <div className="hidden lg:flex">
                <NavPages stylesNavtop />
            </div>
            <HeaderSearchnavbar />

            <TogglePanels flexcolumn={false} tooltips={true} />
            <WindowDisplayButtons
                HeaderStyles
                maximize={maximize}
                onClick={() => setMaximize(!maximize)}
                id={'main-page-display-buttons'}
            />
        </header>
    )
}

export default Header
