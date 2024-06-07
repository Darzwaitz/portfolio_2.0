import { NavLink } from 'react-router-dom'

function NavTop() {
    return (
        // <nav className="text-grey-01 flex gap-5">
        //     <Link to="/">Home</Link>
        //     <Link to="/about">About</Link>
        //     <Link to="/portfolio">Portfolio</Link>
        //     <Link to="/contact">Contact</Link>
        // </nav>

        <nav className="flex gap-5 text-grey-01">
            {[
                ['Home', '/'],
                ['About', '/about'],
                ['Portfolio', '/portfolio'],
                ['Contact', '/contact'],
            ].map(([title, url]) => (
                <NavLink
                    key={Math.random()}
                    // className="  active:text-grey-08"
                    className={({ isActive }) =>
                        isActive ? 'text-grey-02' : ''
                    }
                    // className="text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg px-3 py-2 font-medium"
                    to={url}
                >
                    {title}
                </NavLink>
            ))}
        </nav>

        //         <nav className="flex sm:justify-center space-x-4">
        //   {[
        //     ['Home', '/dashboard'],
        //     ['Team', '/team'],
        //     ['Projects', '/projects'],
        //     ['Reports', '/reports'],
        //   ].map(([title, url]) => (
        //     <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        //   ))}
        // </nav>
    )
}

export default NavTop
