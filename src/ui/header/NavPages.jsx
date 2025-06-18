import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

function NavPages({ togglePanels, stylesNavtop, stylesNavSidebar }) {
    const { curPageList } = useCurPage()

    // conditionsl styles setup
    const navStylesSidebar = `text-grey-01 flex flex-col border-grey-01 bg-grey-03 px-4 absolute z-50 w-min rounded-xs border lg:hidden 
    ${togglePanels?.toggleLeft ? 'left-[55px]' : 'right-[55px]'}`
    const navStylesNavtop = 'text-grey-01 gap-5'

    // take nav array, remove the first 'search' item from painted main nav links display
    const updatedNavLinks = curPageList.slice()
    updatedNavLinks.shift()

    return (
        <nav
            className={`${stylesNavtop && navStylesNavtop} ${stylesNavSidebar && navStylesSidebar}`}
        >
            {updatedNavLinks.map(([title, icon, url]) => (
                <NavItems key={title} title={title} url={url} icon={icon} />
            ))}
        </nav>
    )
}

export default NavPages
