import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

//TODO
// add dynamic stylez for search menu
// sort lg:hidden to be dynamic

// main nav linkz
function NavPages({ togglePanels, stylesNavMobile, stylesSearchMenu }) {
    const { curPageList, handleCurPageName } = useCurPage()

    // conditional styles setup for main navigation/links if displayed on sidebar
    const navStylesSidebar = ` border-grey-04 bg-black-02 absolute z-50 flex w-[11.1rem] flex-col gap-2 rounded-md border p-1 lg:hidden
    ${togglePanels?.toggleLeft ? 'left-[3.4rem]' : 'right-[3.4rem]'}`

    const searchMenyStyles = ` border-grey-04 bg-black-02 absolute z-50 flex w-[11.1rem] flex-col gap-2 rounded-md border p-1 lg:hidden
    ${togglePanels?.toggleLeft ? 'left-[3.4rem]' : 'right-[3.4rem]'}`

    // take nav array, remove the first 'search' item from painted main nav links display
    const updatedNavLinks = curPageList.slice()
    updatedNavLinks.shift()

    return (
        <nav
            id="main-nav"
            className={`pb-[3px] text-grey-01${stylesNavMobile ? navStylesSidebar : ''} ${stylesSearchMenu ? searchMenyStyles : ''}`}
        >
            {updatedNavLinks.map(([title, icon, url]) => (
                <NavItems
                    key={title}
                    title={title}
                    url={url}
                    icon={icon}
                    // conditional sent to NavItems - styles not directly used on NavItems in this comp.
                    stylesHoverSidebarNav={stylesNavMobile}
                    stylesSearchMenu={stylesSearchMenu}
                    onclickHandler={() => handleCurPageName(title)}
                />
            ))}
        </nav>
    )
}

export default NavPages
