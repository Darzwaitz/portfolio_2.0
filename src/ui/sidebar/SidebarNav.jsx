// svg comp. imports
import SvgWrapper from '@/assets/imgs/svg/components/SvgWrapper'
import NavMenuIcon from './assets/imgs/svg/components/NavMenuIcon'
import ExplorerView from './assets/imgs/svg/components/ExplorerView'
import SourceControl from './assets/imgs/svg/components/SourceControl'
import Search from './assets/imgs/svg/components/Search'
import RemoteExplorer from './assets/imgs/svg/components/RemoteExplorer'
import UserAccount from './assets/imgs/svg/components/UserAccount'
import SettingsGear from './assets/imgs/svg/components/SettingsGear'
import SidebarExplorer from './SidebarExplorer'
import NavPages from '../header/NavPages'

import { usePanels } from '@/contexts/PanelsContext'
import { useState } from 'react'

function SidebarNav() {
    // toggle panel controls triggered in header comp.
    const { togglePanels } = usePanels()

    const [toggleExplorer, setToggleExplorer] = useState(false)
    const [toggleNav, setToggleNav] = useState(false)

    function handleToggleExplorer() {
        if (togglePanels.toggleLeft || togglePanels.toggleRight)
            setToggleExplorer((show) => (show = !show))
    }

    function handleToggleNav() {
        setToggleNav((show) => (show = !show))
    }

    return (
        (togglePanels.toggleLeft || togglePanels.toggleRight) && (
            <aside
                // show proper border on sidebar toggle
                className={`flex ${
                    togglePanels.toggleRight
                        ? 'border-l-grey-04 order-1 border-l-[1px]'
                        : 'border-r-grey-04 order-0 border-r-[1px]'
                }`}
            >
                <nav
                    // flex order also needed here for correct order of comps when sidebar toggled right
                    className={`bg-black-01 text-grey-01 flex flex-col items-center justify-between ${
                        togglePanels.toggleRight ? 'order-1' : 'order-0'
                    }`}
                >
                    {/* sidebar top nav links */}
                    <div>
                        <SvgWrapper size="large">
                            <div
                                className="lg:hidden"
                                onClick={handleToggleNav}
                            >
                                <NavMenuIcon />
                            </div>
                            {/* onToggleExplorer={handleToggleExplorer} from this comp. SidebarNav, not PanelsContext */}
                            <ExplorerView
                                onToggleExplorer={handleToggleExplorer}
                            />
                            <SourceControl />

                            {/* SearchProjects */}
                            <Search />
                            <RemoteExplorer />
                        </SvgWrapper>
                    </div>
                    {/* sidebar bottom nav links */}
                    <div>
                        <SvgWrapper size="large">
                            <UserAccount />
                            <SettingsGear />
                        </SvgWrapper>
                    </div>
                </nav>

                {/* explorer sub sidebar section */}
                {toggleExplorer && (
                    <SidebarExplorer onToggleExplorer={handleToggleExplorer} />
                )}
                {/* conditionally show main nav list for smaller screens */}
                <div className="lg:hidden">
                    {toggleNav && (
                        <NavPages togglePanels={togglePanels} stylesNavMobile />
                    )}
                </div>
            </aside>
        )
    )
}

export default SidebarNav
