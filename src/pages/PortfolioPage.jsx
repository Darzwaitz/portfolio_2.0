import portfolioItemList from '../data/portfolioItemsList'
import PortfolioItem from '../features/portfolio/PortfolioItem'

// importing data for each portfolio item
// const { title, description, tags } = portfolioItemList;
// console.log(title, description, tags);

// const chosenTag = "wordpress";

function PortfolioPage() {
    return (
        <>
            <h1 className="block pb-4">PORTFOLIO PAGE</h1>
            {/* items container */}
            <div className="flex w-auto justify-between">
                {portfolioItemList.map((project, i) => (
                    <PortfolioItem project={project} key={i} />
                ))}

                <br />
            </div>
        </>
    )
}

export default PortfolioPage
