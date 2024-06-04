// svg comp. imports
import SvgWrapper from '../assets/imgs/svg/components/SvgWrapper'
import UserAccount from '../assets/imgs/svg/components/UserAccount'
import SettingsGear from '../assets/imgs/svg/components/SettingsGear'
import ExplorerView from '../assets/imgs/svg/components/ExplorerView'
import Search from '../assets/imgs/svg/components/Search'
import SourceControl from '../assets/imgs/svg/components/SourceControl'
import RemoteExplorer from '../assets/imgs/svg/components/RemoteExplorer'

function SidebarNav({ onSetTogglePanels }) {
    return (
        <aside
            onClick={onSetTogglePanels}
            className="flex flex-col items-center justify-between border-r-[1px] border-r-grey-04 bg-black-01 text-grey-01"
        >
            {/* top nav links */}
            <nav>
                <SvgWrapper size="large">
                    <ExplorerView />
                    <SourceControl />

                    <Search />
                    <RemoteExplorer />
                </SvgWrapper>
            </nav>
            {/* bottom nav links */}
            <nav>
                <SvgWrapper size="large">
                    <UserAccount />
                    <SettingsGear />
                </SvgWrapper>
            </nav>
        </aside>
    )
}

export default SidebarNav
