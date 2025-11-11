// search bar / current page notification
import { useCurPage } from '../../contexts/CurPageContext'
import { usePanels } from '@/contexts/PanelsContext'
// import useToggleNav from '@/ui/sidebar/hooks/useToggleNav'

import CustomizeLayoutMenu from './CustomizeLayoutMenu'
import SearchMenu from './SearchMenu'

function HeaderSearchnavbar() {
    // from context
    const { curPageName } = useCurPage()
    // console.log(curPageName)
    const { togglePanels } = usePanels()

    // const { toggleNav } = useToggleNav()

    return (
        <div
            id="header-search-navbar"
            className="border-grey-07 bg-grey-03 text-grey-06 relative my-1 grow rounded-lg border py-0.5 pb-1 text-center text-sm sm:w-[21rem] sm:grow-0 md:w-[28rem] lg:mr-auto lg:w-[30rem]"
        >
            {togglePanels.toggleCustomizeLayout && <CustomizeLayoutMenu />}
            {/* {togglePanels.toggleSearchBar && toggleNav && <SearchMenu />} */}
            {togglePanels.toggleSearchBar && <SearchMenu />}
            <span className="">{curPageName}</span>
        </div>
    )
}

export default HeaderSearchnavbar
