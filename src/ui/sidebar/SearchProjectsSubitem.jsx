import { useState } from 'react'
import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import PortfolioFilteritems from '@/features/portfolio/PortfolioFilteritems'

function SearchProjectsSubitem() {
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
            <div className="block">
                {reveal && (
                    <ul>
                        <PortfolioFilteritems />
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SearchProjectsSubitem
