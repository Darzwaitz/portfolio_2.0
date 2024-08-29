import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'
// import { useCurPageName } from '../../hooks/useCurPageName'
// const tempNavs = [
//     ['Test', '/'],
//     ['About', '/about'],
//     ['Portfolio', '/portfolio'],
//     ['Contact', '/contact'],
// ]
function NavTop() {
    const { curPageList } = useCurPage()
    // console.log(curPageList)

    return (
        <nav className="flex gap-5 text-grey-01">
            {curPageList.map(([title, url, icon]) => (
                // console.log(title, url),
                <NavItems key={title} title={title} url={url} icon={icon} />
            ))}
        </nav>
    )
}

export default NavTop
