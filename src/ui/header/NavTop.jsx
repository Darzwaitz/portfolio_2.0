import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

function NavTop() {
    const { curPageList } = useCurPage()

    return (
        <nav className="flex gap-5 text-grey-01">
            {curPageList.map(([title, icon, url]) => (
                <NavItems key={title} title={title} url={url} icon={icon} />
            ))}
        </nav>
    )
}

export default NavTop
