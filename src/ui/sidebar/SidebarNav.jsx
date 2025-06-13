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
// import NavTop from '../header/NavTop'
import NavTop2 from '../header/NavTop2'

import { usePanels } from '@/contexts/PanelsContext'
import { useState } from 'react'

function SidebarNav() {
    const { togglePanels } = usePanels()

    const [toggleExplorer, setToggleExplorer] = useState(false)
    const [toggleNav, setToggleNav] = useState(false)
    // console.log(toggleNav)

    function handleToggleExplorer() {
        if (togglePanels.toggleLeft || togglePanels.toggleRight)
            setToggleExplorer((show) => (show = !show))
    }

    function handleToggleNav() {
        // if (togglePanels.toggleLeft || togglePanels.toggleRight)
        // console.log('toggleNav')

        setToggleNav((show) => (show = !show))

        // console.log(togglePanels.toggleLeft)
    }

    return (
        (togglePanels.toggleLeft || togglePanels.toggleRight) && (
            <aside
                style={
                    togglePanels.toggleRight ? { order: '1' } : { order: '0' }
                }
                // show border left if sidebar is toggled to right side
                className={
                    togglePanels.toggleRight
                        ? 'border-l-grey-04 flex border-l-[1px]'
                        : 'border-r-grey-04 flex border-r-[1px]'
                }
            >
                <nav
                    style={
                        togglePanels.toggleRight
                            ? { order: '1' }
                            : { order: '0' }
                    }
                    className="bg-black-01 text-grey-01 flex flex-col items-center justify-between"
                >
                    {/* top nav links */}
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
                    {/* bottom nav links */}
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
                {/* <div className={toggleNav && 'hidden'}>
                    <NavTop />
                </div> */}
                {toggleNav && <NavTop2 togglePanels={togglePanels} />}
                {/* <NavTop /> */}
            </aside>
        )
    )
}

export default SidebarNav
