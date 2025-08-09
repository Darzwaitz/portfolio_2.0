// search bar / current page notification
import { useCurPage } from '../../contexts/CurPageContext'
import { usePanels } from '@/contexts/PanelsContext'

import CustomizeLayoutMenu from './CustomizeLayoutMenu'

function HeaderSearchnavbar() {
    // from context
    const { curPageName } = useCurPage()
    // console.log(curPageName)
    const { togglePanels } = usePanels()

    return (
        <div
            id="header-search-navbar"
            className="border-grey-07 bg-grey-03 text-grey-06 relative m-auto my-1 grow rounded-lg border py-1 pb-2 text-center text-sm sm:w-[20rem] sm:grow-0 md:w-[28rem] lg:w-[34rem]"
        >
            {togglePanels.toggleCustomizeLayout && <CustomizeLayoutMenu />}
            <span className="">{curPageName}</span>
        </div>
    )
}

export default HeaderSearchnavbar
