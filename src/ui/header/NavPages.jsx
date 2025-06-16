import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

const navStylesSidebar =
    'text-grey-01 border-grey-01 bg-grey-03 absolute z-50 w-min gap-5 rounded-xs border lg:hidden'
const navStylesNavtop = 'text-grey-01 gap-5'

function NavPages({ togglePanels }) {
    const { curPageList } = useCurPage()

    // take nav array, remove the first 'search' item from painted main nav links display
    const updatedNavLinks = curPageList.slice()
    updatedNavLinks.shift()

    return (
        // <nav className="text-grey-01 hidden gap-5 lg:flex">
        // <nav className="text-grey-01 gap-5 lg:flex">
        <nav
            style={
                togglePanels.toggleLeft ? { left: '57px' } : { right: '57px' }
            }
            // lg:hidden hides nav if window is resized larger & nav is shown - don't want nav to show when burger menu doesn't show
            className={navStylesNavtop && navStylesSidebar}
        >
            {updatedNavLinks.map(([title, icon, url]) => (
                <NavItems key={title} title={title} url={url} icon={icon} />
            ))}
        </nav>
    )
}

export default NavPages
