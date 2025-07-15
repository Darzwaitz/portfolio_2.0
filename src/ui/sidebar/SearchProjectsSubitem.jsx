import { useState } from 'react'
import { useFilter } from '../../contexts/FilteritemsContext'
import { useCurPage } from '@/contexts/CurPageContext'
import { Link, useLocation } from 'react-router-dom'

import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import PortfolioFilteritems from '@/features/portfolio/PortfolioFilteritems'

function SearchProjectsSubitem() {
    // from Context
    const { onShowSubmit } = useFilter()
    const { handleCurPageName } = useCurPage()

    // truthy if portfolio is url location
    const portfolioUrl = useLocation().pathname.slice(1) === 'portfolio'

    // revealItemsList/hide dropdown menu
    const [revealItemsList, setRevealItemsList] = useState(false)

    return (
        <div className="listitem">
            <div
                className="text-grey-02 flex cursor-pointer text-sm"
                onClick={() => setRevealItemsList(!revealItemsList)}
            >
                <span className="mr-1 w-5 self-center">
                    <ArrowIcon />
                </span>
                <h1 className="pb-0.5">SEARCH PROJECTS</h1>
            </div>

            {/* choose/filter items section - set flex to col */}
            {revealItemsList && (
                <div className="pt-1 pl-4">
                    <PortfolioFilteritems flexcolumn />
                </div>
            )}

            {/* Only show SUBMIT button when search projects portfolioitemslist is open, and current page isn't portfolio page */}
            {revealItemsList && onShowSubmit && !portfolioUrl && (
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
