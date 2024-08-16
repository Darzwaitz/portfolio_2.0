import { useCurPage } from '../../contexts/CurPageContext'
import { NavLink } from 'react-router-dom'

function NavTop({ setCurPageName }) {
    // const { curPageName } = useCurPage()
    const { curPageName } = useCurPage()
    console.log(curPageName)

    return (
        <nav className="flex gap-5 text-grey-01">
            {['1', '2'].map(([title, url, icon]) => (
                <NavLink
                    key={title}
                    onClick={(e) => {
                        setCurPageName(`${icon}  ${e.target.textContent}`)
                    }}
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
