// svg comp. imports
import SvgSectionWrapper from '@/assets/imgs/svg/components/SvgSectionWrapper'
import SidebarNavMenuButton from './buttons/SidebarNavMenuButton'
import ExplorerViewButton from './buttons/ExplorerViewButton'
import SourceControlButton from './buttons/SourceControlButton'
import SearchButton from './buttons/SearchButton'
import RemoteExplorerButton from './buttons/RemoteExplorerButton'
import UserAccountButton from './buttons/UserAccountButton'
import SettingsGearButton from './buttons/SettingsGearButton'
import SidebarExplorer from './SidebarExplorer'
import NavPages from '../header/NavPages'

import useToggleNav from './hooks/useToggleNav'

import { usePanels } from '@/contexts/PanelsContext'
import { useState } from 'react'

function SidebarNav() {
    const { toggleNav, onHandleToggleNav } = useToggleNav()
    // SvgSectionWrapper custom styles created/passed for/within this comp
    let svgSectionStyles = 'flex-col gap-[1.7rem]'

    // toggle panel controls triggered in header comp.
    const { togglePanels } = usePanels()

    const [toggleExplorer, setToggleExplorer] = useState(false)

    function handleToggleExplorer() {
        if (togglePanels.toggleLeft || togglePanels.toggleRight)
            setToggleExplorer((show) => (show = !show))
    }

    function handleToggleNav() {
        onHandleToggleNav()

        if (toggleNav === true)
            return document.removeEventListener('click', clickOutside)

        setTimeout(() => document.addEventListener('click', clickOutside))

        function clickOutside(e) {
            const curElemId = e.currentTarget.id

            // close the current maximized item onClick of these element ids
            if (
                curElemId !== 'sidebar-nav-menu' ||
                curElemId !== 'search-projects-sidenav'
            ) {
                // outside click for SidebarNav to be closed if open
                onHandleToggleNav()

                // setToggleNav((show) => (show = !show))
                return document.removeEventListener('click', clickOutside)
            }
        }
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
                    {/* sidebar nav links - a */}
                    <SvgSectionWrapper
                        id={'sidebar-svg-wrapper-top'}
                        customStyles={svgSectionStyles}
                        size="large"
                    >
                        <SidebarNavMenuButton
                            handleToggleNav={handleToggleNav}
                        />
                        {/* onToggleExplorer={handleToggleExplorer} from this comp. SidebarNav, not PanelsContext */}
                        <ExplorerViewButton
                            onToggleExplorer={handleToggleExplorer}
                        />
                        <SourceControlButton />

                        {/* SearchProjects */}
                        <SearchButton />
                        <RemoteExplorerButton />
                    </SvgSectionWrapper>
                    {/* sidebar nav links - b */}
                    <SvgSectionWrapper
                        id={'sidebar-svg-wrapper-bottom'}
                        customStyles={svgSectionStyles}
                        size="large"
                    >
                        <UserAccountButton />
                        <SettingsGearButton />
                    </SvgSectionWrapper>
                </nav>

                {/* explorer sub sidebar section */}
                {toggleExplorer && (
                    <SidebarExplorer onToggleExplorer={handleToggleExplorer} />
                )}
                {/* conditionally show main nav list for smaller screens onclick of burger icon  */}
                <div className="lg:hidden">
                    {toggleNav && (
                        <NavPages
                            togglePanels={togglePanels}
                            stylesNavMobile={true}
                        />
                    )}
                </div>
            </aside>
        )
    )
}

export default SidebarNav
