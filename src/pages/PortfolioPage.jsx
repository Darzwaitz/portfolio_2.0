import PortfolioItemsList from '../data/PortfolioItemsList'
import PortfolioItem from '../features/portfolio/PortfolioItem'
import PortfolioFilteritems from '../features/portfolio/PortfolioFilteritems'
import usePortfolioitemTags from '../hooks/usePortfolioitemTags'

function PortfolioPage() {
    const portfolioitemTags = usePortfolioitemTags()
    function clickEl(e) {
        // e.target.className.add('hidden')
        console.log(e.target.hidden)
    }

    return (
        <>
            <h1 className="block pb-4">PORTFOLIO PAGE</h1>

            {/* choose filter items section */}
            <ul className="mb-5 flex justify-center">
                <PortfolioFilteritems />
            </ul>

            {/* items container */}
            <div className="grid grid-cols-(--item-grid-cols) gap-2">
                {PortfolioItemsList.map((project, i) =>
                    // const {title, description, tags} = project
                    portfolioitemTags.includes(...project.tags) ? (
                        // <PortfolioItem project={project} key={i} />
                        <PortfolioItem key={i}>
                            {/* item container within comp */}
                            <div>
                                <PortfolioItem.TagList
                                    // tags={project.tags}
                                    icon={project.icon}
                                />
                            </div>
                            <div className="">
                                <PortfolioItem.Title title={project.title} />
                                <PortfolioItem.Img />
                                {/* show on condition in portfolioitem */}
                                <PortfolioItem.Description
                                    description={project.description}
                                    onclick={clickEl}
                                />
                            </div>
                        </PortfolioItem>
                    ) : (
                        ''
                    )
                )}
            </div>
        </>
    )
}

export default PortfolioPage
