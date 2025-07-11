import PortfolioItemsList from '../data/PortfolioItemsList'
import PortfolioItem from '../features/portfolio/PortfolioItem'
import PortfolioFilteritems from '../features/portfolio/PortfolioFilteritems'
import usePortfolioitemTags from '../hooks/usePortfolioitemTags'

function PortfolioPage() {
    const portfolioitemTags = usePortfolioitemTags()

    return (
        // <div className="block h-full pb-4">
        // <div className="h-full">
        <>
            {/* <h1 className="block pb-4">PORTFOLIO PAGE</h1> */}
            <h1>PORTFOLIO PAGE</h1>

            {/* choose filter items section */}
            <PortfolioFilteritems width />

            {/* items container */}
            <div
                id="itemsdisplay"
                className="relative grid h-full grid-cols-(--item-grid-cols) gap-2"
            >
                {/* <div className="relative flex gap-2"> */}
                {PortfolioItemsList.map((project, i) =>
                    portfolioitemTags.includes(...project.tags) ? (
                        <PortfolioItem key={i} projectKey={i}>
                            {/* item container within comp */}
                            <PortfolioItem.ItemWrapper>
                                <PortfolioItem.DivWrapper>
                                    <PortfolioItem.TagList
                                        // tags={project.tags}
                                        icon={project.icon}
                                    />
                                </PortfolioItem.DivWrapper>

                                <PortfolioItem.GridWrapper>
                                    <PortfolioItem.Title
                                        title={project.title}
                                    />
                                    {/* maximize item button */}
                                    <PortfolioItem.Maximize />
                                    <PortfolioItem.Img />
                                    {/* show on condition in portfolioitem */}
                                    <PortfolioItem.Description
                                        description={project.description}
                                    />
                                </PortfolioItem.GridWrapper>
                            </PortfolioItem.ItemWrapper>
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
