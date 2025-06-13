import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

function NavTop({ togglePanels }) {
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
            className="text-grey-01 absolute w-min gap-5 lg:hidden"
        >
            {updatedNavLinks.map(([title, icon, url]) => (
                <NavItems key={title} title={title} url={url} icon={icon} />
            ))}
        </nav>
    )
}

export default NavTop
