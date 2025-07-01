import { useState } from 'react'
import { useFilter } from '../../contexts/FilteritemsContext'
import { useCurPage } from '@/contexts/CurPageContext'
import { Link } from 'react-router-dom'

import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import PortfolioFilteritems from '@/features/portfolio/PortfolioFilteritems'

function SearchProjectsSubitem() {
    // from Context
    const { onShowSubmit } = useFilter()
    const { handleCurPageName } = useCurPage()

    // reveal/hide dropdown menu
    let [reveal, setReveal] = useState(false)

    function handleReveal() {
        setReveal(!reveal)
    }

    return (
        <div className="listitem">
            <div
                className="text-grey-02 flex cursor-pointer text-sm"
                onClick={handleReveal}
            >
                <span className="mr-1 w-5 self-center">
                    <ArrowIcon />
                </span>
                <h1 className="pb-0.5">SEARCH PROJECTS</h1>
            </div>

            {/* choose filter items section - set flex to col */}
            {reveal && (
                <div className="pt-1 pl-5">
                    <PortfolioFilteritems flexcolumn />
                </div>
            )}

            {/* Only show SUBMIT button when search projects portfolioitemslist is open */}
            {reveal && onShowSubmit && (
                <div className="mt-1 flex items-center">
                    <span className="mr-1 w-5">
                        <ArrowIcon />
                    </span>
                    <Link
                        to="portfolio"
                        onClick={() => handleCurPageName('Portfolio')}
                    >
                        <h1 className="mb-px cursor-pointer text-sm">SUBMIT</h1>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default SearchProjectsSubitem
