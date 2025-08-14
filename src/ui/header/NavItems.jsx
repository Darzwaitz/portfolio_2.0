import { NavLink } from 'react-router-dom'
import ArrowIcon from '../sidebar/assets/imgs/svg/components/ArrowIcon'

function NavItems({ title, url, stylesHoverSidebarNav, onclickHandler }) {
    const commonItemStyles = 'hover:text-grey-02b pr-2 pb-1 pl-1.5'

    return (
        <NavLink
            key={title}
            title={title}
            className={({ isActive }) =>
                !isActive
                    ? `${stylesHoverSidebarNav ? 'hover:bg-blue-01 flex items-center justify-between' : 'hover:bg-grey-04'} ${commonItemStyles} text-grey-09 hover:rounded-md`
                    : `${stylesHoverSidebarNav ? 'flex items-center justify-between' : ''} ${commonItemStyles} text-grey-02b rounded-md`
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
