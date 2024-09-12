import portfolioItemList from '../data/portfolioItemsList'
import PortfolioItem from '../features/portfolio/PortfolioItem'
import PortfolioFilteritems from '../features/portfolio/PortfolioFilteritems'
import { useFilter } from '../contexts/FilteritemsContext'

// importing data for each portfolio item
// const { title, description, tags } = portfolioItemList;
// console.log(title, description, tags);

// const chosenTag = "wordpress";

function PortfolioPage() {
    const { items } = useFilter()

    const checkStateTags = []

    const checkStateList = function () {
        items.map((item) =>
            item.checked === true ? checkStateTags.push(item.name) : ''
        )
        console.log('checkStateList RUN')
    }
    checkStateList()

    return (
        <>
            <h1 className="block pb-4">PORTFOLIO PAGE</h1>

            <ul className="mb-5 flex justify-center">
                <PortfolioFilteritems />
            </ul>

            {/* items container */}
            <div className="flex w-auto justify-between">
                {portfolioItemList.map((project, i) =>
                    checkStateTags.includes(...project.tags) ? (
                        <PortfolioItem project={project} key={i} />
                    ) : (
                        ''
                    )
                )}
            </div>
        </>
    )
}

export default PortfolioPage
