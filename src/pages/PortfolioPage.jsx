import PortfolioItemsList from '../data/PortfolioItemsList'
import PortfolioItem from '../features/portfolio/PortfolioItem'
import PortfolioFilteritems from '../features/portfolio/PortfolioFilteritems'
import usePortfolioitemTags from '../hooks/usePortfolioitemTags'

function PortfolioPage() {
    const portfolioitemTags = usePortfolioitemTags()

    return (
        <>
            <h1 className="block pb-4">PORTFOLIO PAGE</h1>

            <ul className="mb-5 flex justify-center">
                <PortfolioFilteritems />
            </ul>

            {/* items container */}
            <div className="flex w-auto justify-between">
                {/* {PortfolioItemList.map((project, i) =>
                    portfolioitemTags.includes(...project.tags) ? (
                        <PortfolioItem project={project} key={i} />
                    ) : (
                        ''
                    )
                )} */}
                {PortfolioItemsList.map((project, i) =>
                    // const {title, description, tags} = project
                    portfolioitemTags.includes(...project.tags) ? (
                        // <PortfolioItem project={project} key={i} />
                        <PortfolioItem key={i}>
                            <div className="flex rounded-s-sm  border border-grey-04 text-grey-02 hover:brightness-110">
                                <div>
                                    <PortfolioItem.TagList
                                        // tags={project.tags}
                                        icon={project.icon}
                                    />
                                </div>
                                <div className="">
                                    <PortfolioItem.Img />

                                    <PortfolioItem.Title
                                        title={project.title}
                                    />

                                    <PortfolioItem.Description
                                        description={project.description}
                                    />
                                </div>
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
