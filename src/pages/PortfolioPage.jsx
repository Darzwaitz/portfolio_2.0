import PortfolioItem from '../features/portfolio/PortfolioItem'
import PortfolioFilteritems from '../features/portfolio/PortfolioFilteritems'
import useCurPortfolioList from '../features/portfolio/hooks/useCurPortfolioList'
import PageHeading from './PageHeading'

function PortfolioPage() {
    const filteredItemList = useCurPortfolioList()

    return (
        <>
            <PageHeading title={'Portfolio Page'} />

            {/* choose filter items section */}
            <PortfolioFilteritems />

            <div id="itemscontainerwrapper" className="h-full">
                {/* items container */}
                <div
                    id="itemsdisplay"
                    className="relative grid grid-cols-(--item-grid-cols) gap-2"
                >
                    {filteredItemList.map((project, i) => (
                        <PortfolioItem
                            show={project.show}
                            key={i}
                            projectKey={i}
                        >
                            {/* item container within comp */}
                            <PortfolioItem.ItemWrapper id={project.id}>
                                <PortfolioItem.DivWrapper>
                                    <PortfolioItem.TagList
                                        // tags={project.tags}
                                        icon={project.icon}
                                    />
                                </PortfolioItem.DivWrapper>

                                <PortfolioItem.GridWrapper>
                                    {/* maximize restore etc. buttonz */}
                                    <PortfolioItem.PortfolioCardButtons />
                                    <PortfolioItem.Img />
                                    <PortfolioItem.Title
                                        title={project.title}
                                    />

                                    {/* show on condition in portfolioitem */}
                                    <PortfolioItem.Description
                                        description={project.description}
                                    />
                                    <PortfolioItem.ItemFooter
                                        githubProjectLink={
                                            project.githubProjectLink
                                        }
                                        liveProjectLink={
                                            project.liveProjectLink
                                        }
                                    />
                                    {/* <PortfolioItem.PaddingBottom /> */}
                                </PortfolioItem.GridWrapper>
                            </PortfolioItem.ItemWrapper>
                        </PortfolioItem>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PortfolioPage
