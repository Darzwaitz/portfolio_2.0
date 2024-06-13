import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'

function SidebarExplorer() {
    return (
        <section className="w-max border-l-[1px] border-r-[1px] border-l-grey-04  border-r-grey-04 bg-black-01 text-grey-01">
            <ul className=" mt-4 flex flex-col">
                {/* <li>EXPLORER</li>
            <li>ALL PROJECTS</li>
            <li>SEARCH PROJECTS</li>
            <li>SHOWCASE PROJECTS</li> */}
                {[
                    'EXPLORER',
                    'ALL PROJECTS',
                    'SEARCH PROJECTS',
                    'SHOWCASE PROJECTS',
                ].map((title) => (
                    <li
                        key={title}
                        className="flex text-sm text-grey-02 hover:brightness-110"
                    >
                        <span className="">
                            <ArrowIcon />
                        </span>
                        <h1 className="">{title}</h1>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default SidebarExplorer
