import { Link } from 'react-router-dom'
// search bar / current page notification
import { useCurPage } from '@/contexts/CurPageContext'

function Logo() {
    const { onCurPageName } = useCurPage()

    return (
        <Link to="/" onClick={() => onCurPageName('Search')}>
            <img
                src="/imgs/Portfolio-website-logo-Retina-344x320September-2017.png"
                alt="main-logo"
                className="mr-3 h-5"
            />
        </Link>
    )
}

export default Logo
