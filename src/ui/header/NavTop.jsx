import { useCurPage } from '@/contexts/CurPageContext'
import NavItems from './NavItems'

function NavTop() {
    // take nav array, remove the first 'search' item from painted nav display
    const { curPageList } = useCurPage()
    const displayNavArr = curPageList.slice()
    displayNavArr.shift()

    console.log('run')

    return (
        <nav className="text-grey-01 flex gap-5">
            {displayNavArr.map(([title, icon, url]) => (
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
