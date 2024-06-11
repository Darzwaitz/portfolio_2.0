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
                className="flex"
            >
                <nav
                    style={
                        togglePanels.toggleRight
                            ? { order: '1' }
                            : { order: '0' }
                    }
                    className="flex flex-col items-center justify-between border-r-[1px] border-r-grey-04 bg-black-01 text-grey-01"
                >
                    {/* top nav links */}
                    <div>
                        <SvgWrapper size="large">
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

                {/* explorer 2nd sidebar section */}
                {toggleExplorer && <SidebarExplorer />}
            </aside>
        )
    )
}

export default SidebarNav
