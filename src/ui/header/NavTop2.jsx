import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

function NavTop() {
    const { curPageList } = useCurPage()

    // take nav array, remove the first 'search' item from painted main nav links display
    const updatedNavLinks = curPageList.slice()
    updatedNavLinks.shift()

    return (
        // <nav className="text-grey-01 hidden gap-5 lg:flex">
        // <nav className="text-grey-01 gap-5 lg:flex">
        <nav className="text-grey-01 absolute gap-5">
            {updatedNavLinks.map(([title, icon, url]) => (
                <NavItems key={title} title={title} url={url} icon={icon} />
            ))}
        </nav>
    )
}

export default NavTop
