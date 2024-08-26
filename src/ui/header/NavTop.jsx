import { useCurPage } from '@/contexts/CurPageContext'
import { NavLink } from 'react-router-dom'
import { useCurPageName } from '../../hooks/useCurPageName'

function NavTop() {
    const handleCurPageName = useCurPageName
    const { curPageList } = useCurPage()

    return (
        <nav className="flex gap-5 text-grey-01">
            {curPageList.map(([title, url]) => (
                // {curPageList.map(([title, url, icon]) => (
                <NavLink
                    key={title}
                    // onClick={(e) => {
                    //     console.log(e)
                    //     console.log(title, url, icon)

                    //     // setcurPageList(`${icon}  ${e.target.textContent}`)
                    // }}
                    onClick={(e) => handleCurPageName(e)}
                    className={({ isActive }) =>
                        !isActive
                            ? ' pb-1 pl-1.5 pr-2 hover:text-grey-02'
                            : 'rounded-md bg-grey-04 pb-1 pl-1.5 pr-2 text-grey-02'
                    }
                    to={url}
                >
                    {title}
                </NavLink>
            ))}
        </nav>
    )
}

export default NavTop
