export default function SidebarExplorer() {
    return (
        <ul className="border-l-[1px] border-r-[1px] border-l-grey-04 border-r-grey-04 bg-black-01  text-grey-01">
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
                <li key={title} className="text-grey-02">
                    {title}
                </li>
            ))}
        </ul>
    )
}
