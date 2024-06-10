import { NavLink } from 'react-router-dom'

function NavTop() {
    return (
        <nav className="flex gap-5 text-grey-01">
            {[
                ['Home', '/'],
                ['About', '/about'],
                ['Portfolio', '/portfolio'],
                ['Contact', '/contact'],
            ].map(([title, url]) => (
                <NavLink
                    key={title}
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
