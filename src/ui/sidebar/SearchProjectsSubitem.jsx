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
            {/* <div className='hover:brightness-110" mb-[1.57rem] flex cursor-text  flex-wrap border-b-[1px] border-t-[1px] border-b-grey-04 border-t-grey-04 p-1 pr-3 text-sm text-grey-02'> */}
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
        </>
    )
}

export default SearchProjectsSubitem
