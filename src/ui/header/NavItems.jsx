import { NavLink } from 'react-router-dom'
import { useCurPage } from '@/contexts/CurPageContext'
import ArrowIcon from '../sidebar/assets/imgs/svg/components/ArrowIcon'

function NavItems({ title, url, stylesHoverSidebarNav }) {
    const { onCurPageName } = useCurPage()

    return (
        <NavLink
            key={title}
            className={({ isActive }) =>
                !isActive
                    ? `${stylesHoverSidebarNav ? 'hover:bg-blue-01 flex items-center justify-between hover:rounded-md' : ''} hover:text-grey-02 pr-2 pb-1 pl-1.5`
                    : `${stylesHoverSidebarNav ? 'bg-blue-02 flex items-center justify-between' : 'bg-grey-04'} text-grey-02 rounded-md pr-2 pb-1 pl-1.5`
            }
            to={url}
            onClick={() => {
                // onCurPageName(e.target.innerText)
                onCurPageName(title)
            }}
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
