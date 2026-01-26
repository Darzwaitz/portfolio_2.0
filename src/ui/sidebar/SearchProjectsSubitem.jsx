import { useState } from 'react'
import { useFilter } from '../../contexts/FilteritemsContext'
import { useCurPage } from '@/contexts/CurPageContext'
import { Link, useLocation } from 'react-router'

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
        <div id="search-projects-sidenav" className="listitem">
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
                <div className="flex items-center">
                    <span className="mr-1 w-5">
                        <ArrowIcon />
                    </span>
                    <Link
                        to="portfolio"
                        onClick={() => handleCurPageName('Portfolio')}
                    >
                        <button className="hover:border-grey-07 border-black-01 hover:bg-grey-08 hover:text-grey-02 cursor-pointer rounded-md border pt-1 pr-2 pb-1.5 pl-2 text-sm hover:border">
                            SUBMIT
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default SearchProjectsSubitem
