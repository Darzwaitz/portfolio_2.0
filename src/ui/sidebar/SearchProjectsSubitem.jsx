import { useState } from 'react'
import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import PortfolioFilteritems from '@/features/portfolio/PortfolioFilteritems'

function SearchProjectsSubitem() {
    // reveal/hide dropdown menu
    let [reveal, setReveal] = useState(false)
    let show = true

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
            {show && (
                <div className="flex">
                    <span className="mr-1 w-5 !cursor-pointer ">
                        <ArrowIcon />
                    </span>
                    <h1>Submit</h1>
                </div>
            )}
        </div>
    )
}

export default SearchProjectsSubitem
