import { React, useState } from 'react'
import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import PortfolioFilteritems from '@/features/portfolio/PortfolioFilteritems'

function SearchProjects() {
    // reveal/hide dropdown menu
    let [reveal, setReveal] = useState(false)

    function handleReveal() {
        setReveal(!reveal)
    }

    return (
        // <div className="block w-full items-center justify-between">
        // <div className="w-full">
        <React.Fragment className="w-full">
            <span className="mr-1 w-5 self-start pt-0.5">
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
            {reveal && (
                // <>
                <ul className="flex flex-col">
                    <PortfolioFilteritems />
                </ul>
                // {/* </> */}
            )}
        </React.Fragment>
        // </div>
    )
}

export default SearchProjects
