import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'

function ExplorerMenuItem() {
    return (
        <div>
            <h1>EXPLORER</h1>
        </div>
    )
}

function SidebarExplorer() {
    return (
        <section className="w-max border-l-[1px] border-r-[1px] border-l-grey-04  border-r-grey-04 bg-black-01 text-grey-01">
            <ul className=" mt-3 flex flex-col">
                {/* <li>EXPLORER</li>
            <li>ALL PROJECTS</li>
            <li>SEARCH PROJECTS</li>
            <li>SHOWCASE PROJECTS</li> */}
                {[
                    // 'EXPLORER',
                    <ExplorerMenuItem key={'01'} />,
                    'ALL PROJECTS',
                    'SEARCH PROJECTS',
                    'SHOWCASE PROJECTS',
                ].map((title) => (
                    <li
                        key={title}
                        // className="mb-[2.1rem] flex items-center text-sm text-grey-02 hover:brightness-110"
                        className="mb-[1.57rem] flex items-center border-b-[1px] border-t-[1px] border-b-grey-04 border-t-grey-04 p-1 pr-4 text-sm text-grey-02 hover:brightness-110"
                    >
                        <span className="w-5">
                            <ArrowIcon />
                        </span>
                        {/* <h1 className="pb-0.5">{title}</h1> */}
                        {title}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default SidebarExplorer
