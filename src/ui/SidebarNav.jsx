function SidebarNav() {
    return (
        // <aside className=" bg-red-300 fixed top-0 left-0 gap-x-40 w-64 h-auto z-auto">
        <aside className="flex flex-col justify-between bg-red-300">
            {/* top nav links */}
            <div>
                <h1 className="bg-red-600 ">sidebar</h1>
                <h1 className="bg-red-600 ">sidebar</h1>
                <h1 className="bg-red-600 ">sidebar</h1>
                <h1 className="bg-red-600 ">sidebar</h1>
            </div>
            {/* bottom nav links */}
            <div>
                <p className="bg-red-200 ">bottom</p>
                <p className="bg-red-200 ">bottom</p>
            </div>
        </aside>
    )
}

export default SidebarNav
