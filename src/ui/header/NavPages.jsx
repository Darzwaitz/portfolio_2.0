import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

function NavPages({ togglePanels, stylesNavMobile }) {
    const { curPageList, handleCurPageName } = useCurPage()

    // conditional styles setup for main navigation/links if displayed on sidebar
    const navStylesSidebar = `text-grey-01 border-grey-04 bg-black-02 absolute z-50 flex w-[11.1rem] flex-col gap-2 rounded-md border p-1 lg:hidden
    ${togglePanels?.toggleLeft ? 'left-[3.4rem]' : 'right-[3.4rem]'}`

    // take nav array, remove the first 'search' item from painted main nav links display
    const updatedNavLinks = curPageList.slice()
    updatedNavLinks.shift()

    return (
        <nav
            className={`${stylesNavMobile && navStylesSidebar} 'text-grey-01'`}
        >
            {updatedNavLinks.map(([title, icon, url]) => (
                <NavItems
                    key={title}
                    title={title}
                    url={url}
                    icon={icon}
                    // conditional sent to NavItems - styles not directly used on NavItems in this comp.
                    stylesHoverSidebarNav={stylesNavMobile}
                    // stylesHoverSidebarNav
                    onclickHandler={() => handleCurPageName(title)}
                />
            ))}
        </nav>
    )
}

export default NavPages
