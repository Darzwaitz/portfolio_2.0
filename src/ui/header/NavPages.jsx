import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

function NavPages({ togglePanels, stylesNavSidebar }) {
    const { curPageList, handleCurPageName } = useCurPage()

    // conditional styles setup for main navigation/links if displayed on sidebar
    const navStylesSidebar = `text-grey-01 border-grey-01 bg-black-02 absolute z-50 flex w-[178px] flex-col gap-2 rounded-md border p-1 lg:hidden
    ${togglePanels?.toggleLeft ? 'left-[55px]' : 'right-[55px]'}`

    // take nav array, remove the first 'search' item from painted main nav links display
    const updatedNavLinks = curPageList.slice()
    updatedNavLinks.shift()

    return (
        <nav
            className={`${stylesNavSidebar && navStylesSidebar} 'text-grey-01'`}
        >
            {updatedNavLinks.map(([title, icon, url]) => (
                <NavItems
                    key={title}
                    title={title}
                    url={url}
                    icon={icon}
                    // conditional sent to NavItems - styles not directly used on NavItems in this comp.
                    stylesHoverSidebarNav={stylesNavSidebar}
                    onclickHandler={() => handleCurPageName(title)}
                />
            ))}
        </nav>
    )
}

export default NavPages
