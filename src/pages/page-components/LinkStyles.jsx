import { Link } from 'react-router'

function LinkStyles({ path, children }) {
    return (
        <Link to={path} className="hover:underline">
            {children}
        </Link>
    )
}

export default LinkStyles
