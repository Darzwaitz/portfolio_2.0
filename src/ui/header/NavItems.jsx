import { NavLink } from 'react-router-dom'
import { useCurPage } from '../../contexts/CurPageContext'

function NavItems({ title, url }) {
    const { onCurPageName } = useCurPage()

    return (
        <NavLink
            key={title}
            className={({ isActive }) =>
                !isActive
                    ? ' pb-1 pl-1.5 pr-2 hover:text-grey-02'
                    : 'rounded-md bg-grey-04 pb-1 pl-1.5 pr-2 text-grey-02'
            }
            to={url}
            onClick={(e) => {
                onCurPageName(e.target.innerText)
            }}
        >
            <span> {title}</span>
        </NavLink>
    )
}

export default NavItems
