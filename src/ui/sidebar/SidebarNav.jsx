// svg comp. imports
import SvgWrapper from '@/assets/imgs/svg/components/SvgWrapper'
import UserAccount from './assets/imgs/svg/components/UserAccount'
import SettingsGear from './assets/imgs/svg/components/SettingsGear'
import ExplorerView from './assets/imgs/svg/components/ExplorerView'
import Search from './assets/imgs/svg/components/Search'
import SourceControl from './assets/imgs/svg/components/SourceControl'
import RemoteExplorer from './assets/imgs/svg/components/RemoteExplorer'
import SidebarExplorer from './SidebarExplorer'

import { usePanels } from '@/contexts/PanelsContext'
import { useState } from 'react'

function SidebarNav() {
    const { togglePanels } = usePanels()

    const [toggleExplorer, setToggleExplorer] = useState(false)

    function handleToggleExplorer() {
        if (togglePanels.toggleLeft || togglePanels.toggleRight)
            setToggleExplorer((show) => (show = !show))
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
                        ? 'flex border-l-[1px] border-l-grey-04'
                        : 'flex border-r-[1px] border-r-grey-04'
                }
            >
                <nav
                    style={
                        togglePanels.toggleRight
                            ? { order: '1' }
                            : { order: '0' }
                    }
                    className="flex flex-col items-center justify-between  bg-black-01 text-grey-01"
                >
                    {/* top nav links */}
                    <div>
                        <SvgWrapper size="large">
                            {/* onToggleExplorer={handleToggleExplorer} from this comp. SidebarNav, not PanelsContext */}
                            <ExplorerView
                                onToggleExplorer={handleToggleExplorer}
                            />
                            <SourceControl />

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
            </aside>
        )
    )
}

export default SidebarNav
