import { NavLink } from 'react-router-dom'
import { useCurPage } from '@/contexts/CurPageContext'

function NavItems({ title, url, stylesHoverSidebarNav }) {
    const { onCurPageName } = useCurPage()
    console.log(stylesHoverSidebarNav)

    return (
        <NavLink
            key={title}
            className={({ isActive }) =>
                !isActive
                    ? // ? `hover:text-grey-02 ${`hover:${stylesHoverSidebarNav}`} w-fit pr-2 pb-1 pl-1.5`
                      `${stylesHoverSidebarNav ? 'hover:bg-blue-01 hover:rounded-md' : ''} hover:text-grey-02 pr-2 pb-1 pl-1.5`
                    : `${stylesHoverSidebarNav ? 'bg-blue-02' : 'bg-grey-04'} text-grey-02 rounded-md pr-2 pb-1 pl-1.5`
            }
            // className={stylesHoverSidebarNav}
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
