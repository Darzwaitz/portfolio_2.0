import { NavLink } from 'react-router-dom'
import { useCurPage } from '../../contexts/CurPageContext'

function NavItems({ title, url }) {
    const { curPageList } = useCurPage
    // const { curPageName, onCurPageName } = useCurPage()
    const { curPageName, setCurPageName } = useCurPage()
    // console.log(title, url)
    console.log(curPageList)
    // onCurPageName()

    return (
        <NavLink
            key={title}
            className={({ isActive }) =>
                !isActive
                    ? ' pb-1 pl-1.5 pr-2 hover:text-grey-02'
                    : 'rounded-md bg-grey-04 pb-1 pl-1.5 pr-2 text-grey-02'
            }
            to={url}
            // onClick={() => onCurPageName?.()}
            onClick={() => setCurPageName('setter2')}
        >
            <span> {title}</span>
            <span> {curPageName}</span>
        </NavLink>
    )
}

export default NavItems
