import { useState } from 'react'
import { useFilter } from '../../contexts/FilteritemsContext'

import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import PortfolioFilteritems from '@/features/portfolio/PortfolioFilteritems'

function SearchProjectsSubitem() {
    // from Context
    const { onShowSubmit } = useFilter()

    // reveal/hide dropdown menu
    let [reveal, setReveal] = useState(false)

    function handleReveal() {
        setReveal(!reveal)
    }

    return (
        <div className="listitem">
            <div className="text-grey-02 flex cursor-pointer text-sm">
                <span className="mr-1 w-5 self-center">
                    <ArrowIcon />
                </span>
                <h1
                    onClick={function () {
                        handleReveal()
                    }}
                    className="pb-0.5"
                >
                    SEARCH PROJECTS
                </h1>
            </div>

            {/* choose filter items section - set flex to col */}
            {reveal && <PortfolioFilteritems flexcolumn />}

            {/* Only show SUBMIT button when search projects portfolioitemslist is open */}
            {reveal && onShowSubmit && (
                <div className="mt-1 flex items-center">
                    <span className="mr-1 w-5">
                        <ArrowIcon />
                    </span>
                    <h1
                        className="mb-px cursor-pointer text-sm"
                        onClick={() => console.log('clickd it')}
                    >
                        SUBMIT
                    </h1>
                </div>
            )}
        </div>
    )
}

export default SearchProjectsSubitem
