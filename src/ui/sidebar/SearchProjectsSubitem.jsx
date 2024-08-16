import { useState } from 'react'
import { useFilter } from '../../contexts/FilteritemsContext'

import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import PortfolioFilteritems from '@/features/portfolio/PortfolioFilteritems'

function SearchProjectsSubitem() {
    // from Context
    const { showSubmit } = useFilter()

    // reveal/hide dropdown menu
    let [reveal, setReveal] = useState(false)

    function handleReveal() {
        setReveal(!reveal)
    }

    return (
        <div className="listitem">
            <div className="flex cursor-pointer text-sm text-grey-02">
                <span className="mr-1 w-5 self-center ">
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

            {reveal && (
                <ul className="ml-6">
                    <PortfolioFilteritems />
                </ul>
            )}
            {showSubmit && (
                <div className="mt-1 flex items-center">
                    <span className="mr-1 w-5">
                        <ArrowIcon />
                    </span>
                    <h1 className="mb-px cursor-pointer text-sm">Submit</h1>
                </div>
            )}
        </div>
    )
}

export default SearchProjectsSubitem
