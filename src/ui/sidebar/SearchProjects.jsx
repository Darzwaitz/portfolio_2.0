import { useState } from 'react'
import PortfolioFilteritems from '@/features/portfolio/PortfolioFilteritems'

function SearchProjects() {
    // reveal/hide dropdown menu
    let [reveal, setReveal] = useState(false)

    function handleReveal() {
        setReveal(!reveal)
    }

    return (
        // <div className="block w-full items-center justify-between">
        <div className="w-full">
            <h1
                onClick={function () {
                    handleReveal()
                }}
                className="pb-0.5"
            >
                SEARCH PROJECTS
            </h1>
            {reveal && (
                <>
                    <ul className="flex flex-col">
                        <PortfolioFilteritems />
                    </ul>
                </>
            )}
        </div>
    )
}

export default SearchProjects
