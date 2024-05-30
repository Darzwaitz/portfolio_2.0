import portfolioItemList from '../data/portfolioItemsList'
import PortfolioItem from '../features/portfolio/PortfolioItem'

// importing data for each portfolio item
// const { title, description, tags } = portfolioItemList;
// console.log(title, description, tags);

// const chosenTag = "wordpress";

function PortfolioPage() {
    return (
        <section>
            <h1 className="block ">PORTFOLIO PAGE</h1>
            <div className="flex">
                {portfolioItemList.map((project, i) => (
                    <PortfolioItem project={project} key={i} />
                ))}

                <br />
            </div>
        </section>
    )
}

export default PortfolioPage
