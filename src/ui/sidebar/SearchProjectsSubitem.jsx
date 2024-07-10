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
        // <div className="block w-full items-center justify-between">
        // <div className="w-full">
        <>
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
            <div className="h-0 basis-full"></div>
            {reveal && (
                <ul>
                    <PortfolioFilteritems />
                </ul>
            )}
        </>
    )
}

export default SearchProjectsSubitem
