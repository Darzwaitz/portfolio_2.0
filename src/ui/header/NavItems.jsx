import { NavLink } from 'react-router-dom'
import ArrowIcon from '../sidebar/assets/imgs/svg/components/ArrowIcon'

function NavItems({ title, url, stylesHoverSidebarNav, onclickHandler }) {
    return (
        <NavLink
            key={title}
            text={title}
            className={({ isActive, text }) =>
                !isActive
                    ? `${stylesHoverSidebarNav ? 'hover:bg-blue-01 flex items-center justify-between' : 'hover:bg-grey-04'} before:content-[attr(${text})] before:bg-blue-03 text-grey-09 pr-2 pb-1 pl-1.5 before:block before:h-3 hover:rounded-md`
                    : //
                      `${stylesHoverSidebarNav ? 'flex items-center justify-between' : ''} text-grey-02 rounded-md pr-2 pb-1 pl-1.5 font-semibold text-shadow-current`
            }
            to={url}
            onClick={onclickHandler}
        >
            <span className={stylesHoverSidebarNav && 'pl-5'}>{title}</span>
            {/* only add arrow icon on sidebar */}
            {stylesHoverSidebarNav && (
                <span className="w-[19px] pt-1">
                    <ArrowIcon />
                </span>
            )}
        </NavLink>
    )
}

export default NavItems
