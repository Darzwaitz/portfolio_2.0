import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to="/">
            <img
                // src="/imgs/logo-loading.gif"
                src="/imgs/Portfolio-website-logo-Retina-344x320September-2017.png"
                alt="main-logo"
                className="mr-3 h-5"
                // onClick={() => setCurPageName(`🏚️  Home`)}
            />
        </Link>
    )
}

export default Logo
