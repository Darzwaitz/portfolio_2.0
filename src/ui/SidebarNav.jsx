// svg comp. imports
import SvgWrapper from '../assets/imgs/svgs/SvgWrapper'
import UserAccount from '../assets/imgs/svgs/UserAccount'
import SettingsGear from '../assets/imgs/svgs/SettingsGear'
import ExplorerView from '../assets/imgs/svgs/ExplorerView'
import Search from '../assets/imgs/svgs/Search'
import SourceControl from '../assets/imgs/svgs/SourceControl'
import RemoteExplorer from '../assets/imgs/svgs/RemoteExplorer'

function SidebarNav() {
    return (
        <aside className="flex flex-col items-center justify-between border-r-[1px] border-r-grey-04 bg-black-01 text-grey-01">
            {/* top nav links */}
            <div>
                <SvgWrapper size="large">
                    <ExplorerView />
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
        </aside>
    )
}

export default SidebarNav
