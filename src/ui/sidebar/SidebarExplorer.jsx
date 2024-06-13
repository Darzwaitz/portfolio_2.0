export default function SidebarExplorer() {
    return (
        <section className="border-l-[1px] border-r-[1px] border-l-grey-04 border-r-grey-04  bg-black-01 text-grey-01">
            <ul className=" mt-4 ">
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
                        className=" text-sm text-grey-02 hover:brightness-110"
                    >
                        <h1 className="text-nowrap ">{title}</h1>
                    </li>
                ))}
            </ul>
        </section>
    )
}
