import { NavLink } from 'react-router-dom'
import ArrowIcon from '../sidebar/assets/imgs/svg/components/ArrowIcon'

function NavItems({ title, url, stylesHoverSidebarNav, onclickHandler }) {
    // const pseudoEl =
    //     'testcssClass after:invisible after:h-0 after:overflow-hidden after:font-semibold after:content-[attr(${title})] after:select-none after:pointer-events-none'
    return (
        <NavLink
            key={title}
            title={title}
            className={({ isActive }) =>
                !isActive
                    ? `${stylesHoverSidebarNav ? 'hover:bg-blue-01 flex items-center justify-between' : 'hover:bg-grey-04'} text-grey-09 pr-2 pb-1 pl-1.5 hover:rounded-md`
                    : `${stylesHoverSidebarNav ? 'flex items-center justify-between' : ''} text-grey-02 after: rounded-md pr-2 pb-1 pl-1.5 font-semibold text-shadow-current`
            }
            // className={`text-grey-02 relative rounded-md pr-2 pb-1 pl-1.5 hover:font-semibold`}
            // className={`before:text-blue-02 before:invisible before:absolute before:h-0 before:overflow-hidden before:font-semibold before:content-[attr(title)]`}
            to={url}
            onClick={onclickHandler}
        >
            <span className={stylesHoverSidebarNav && 'pl-5'}>{title}</span>
            {/* data attr here, not a prop */}
            {/* <span
                title={title}
                className={`before:text-blue-02 before:invisible before:absolute before:h-0 before:overflow-hidden before:font-semibold before:content-[attr(title)]`}
            > */}
            {/* {title} */}

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

// bkUp

// function NavItems({ title, url, stylesHoverSidebarNav, onclickHandler }) {
//     return (
//         <NavLink
//             key={title}
//             text={title}
//             className={({ isActive }) =>
//                 !isActive
//                     ? `${stylesHoverSidebarNav ? 'hover:bg-blue-01 flex items-center justify-between' : 'hover:bg-grey-04'} text-grey-09 pr-2 pb-1 pl-1.5 hover:rounded-md`
//                     : //
//                       `${stylesHoverSidebarNav ? 'flex items-center justify-between' : ''} text-grey-02 rounded-md pr-2 pb-1 pl-1.5 font-semibold text-shadow-current`
//             }
//             to={url}
//             onClick={onclickHandler}
//         >
//             <span className={stylesHoverSidebarNav && 'pl-5'}>{title}</span>
//             {/* only add arrow icon on sidebar */}
//             {stylesHoverSidebarNav && (
//                 <span className="w-[19px] pt-1">
//                     <ArrowIcon />
//                 </span>
//             )}
//         </NavLink>
//     )
// }
