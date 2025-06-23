import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'
import ArrowIcon from '../sidebar/assets/imgs/svg/components/ArrowIcon'

function NavPages({ togglePanels, stylesNavtop, stylesNavSidebar }) {
    const { curPageList } = useCurPage()

    // conditionsl styles setup
    const navStylesSidebar = `w-[178px] text-grey-01 gap-2 flex flex-col border-grey-01 bg-grey-03 px-[2px] absolute z-50 w-min rounded-xs border lg:hidden
    ${togglePanels?.toggleLeft ? 'left-[55px]' : 'right-[55px]'}`
    const navStylesNavtop = 'text-grey-01'

    // take nav array, remove the first 'search' item from painted main nav links display
    const updatedNavLinks = curPageList.slice()
    updatedNavLinks.shift()

    return (
        <nav
            className={`${stylesNavtop && navStylesNavtop} ${stylesNavSidebar && navStylesSidebar}`}
        >
            {updatedNavLinks.map(([title, icon, url]) => (
                <span key={title} className="flex pl-4">
                    <NavItems
                        key={title}
                        title={title}
                        url={url}
                        icon={icon}
                        // conditional sent to NavItems - styles not directly used on NavItems
                        stylesHoverSidebarNav={stylesNavSidebar}
                    />
                    {stylesNavSidebar && <ArrowIcon />}
                </span>
            ))}
        </nav>
    )
}

export default NavPages
