import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'
import { useMemo } from 'react'

function NavTop() {
    const { curPageList } = useCurPage()

    // take nav array, remove the first 'search' item from painted main nav links display
    const navLinks = useMemo(() => {
        const updatedNavLinks = curPageList.slice()
        updatedNavLinks.shift()

        return updatedNavLinks
    }, [curPageList])

    return (
        <nav className="text-grey-01 flex gap-5">
            {navLinks.map(([title, icon, url]) => (
                <NavItems key={title} title={title} url={url} icon={icon} />
            ))}
        </nav>
    )
}

export default NavTop

// function NavTop() {
//     const { curPageList } = useCurPage()

//     console.log(curPageList)
//     const displayNavArr = curPageList.shift()

//     return (
//         <nav className="text-grey-01 flex gap-5">
//             {/* {curPageList.map(([title, icon, url]) => ( */}
//             {displayNavArr.map(([title, icon, url]) => (
//                 <NavItems key={title} title={title} url={url} icon={icon} />
//             ))}
//         </nav>
//     )
// }
