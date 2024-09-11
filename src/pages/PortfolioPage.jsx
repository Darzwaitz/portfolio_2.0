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
    // console.log(items.map((item) => item.name))
    // console.log([...items].forEach((item) => item.name))
    return (
        <>
            <h1 className="block pb-4">PORTFOLIO PAGE</h1>

            <ul className="mb-5 flex justify-center">
                <PortfolioFilteritems />
            </ul>

            {/* items container */}
            <div className="flex w-auto justify-between">
                {portfolioItemList.map((project, i) =>
                    project.tags.includes('React') ? (
                        <PortfolioItem project={project} key={i} />
                    ) : (
                        ''
                    )
                )}
            </div>
            {/* items container
            <div className="flex w-auto justify-between">
                {portfolioItemList.map((project, i) => (
                    <PortfolioItem project={project} key={i} />
                ))}
            </div> */}
            {items.map((item) => (
                <div key={item.name}>{item.name}</div>
            ))}
        </>
    )
}

export default PortfolioPage
