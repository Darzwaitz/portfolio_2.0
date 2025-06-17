import { NavLink } from 'react-router-dom'
import { useCurPage } from '@/contexts/CurPageContext'

function NavItems({ title, url }) {
    const { onCurPageName } = useCurPage()

    return (
        <NavLink
            key={title}
            className={({ isActive }) =>
                !isActive
                    ? 'hover:text-grey-02 pr-2 pb-1 pl-1.5'
                    : 'bg-grey-04 text-grey-02 rounded-md pr-2 pb-1 pl-1.5'
            }
            to={url}
            onClick={() => {
                // onCurPageName(e.target.innerText)
                onCurPageName(title)
            }}
        >
            <span>{title}</span>
        </NavLink>
    )
}

export default NavItems
