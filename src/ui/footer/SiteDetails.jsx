function SiteDetails() {
    const curDateYear = new Date().getFullYear()

    return (
        <div className="hover:bg-grey-04b hover:text-grey-02 ml-auto flex items-center pr-4.5 text-xs">
            {/* <p className="mt-1 pl-3.5"> */}
            <p className="pb-0.5 pl-3.5">
                {/* © {curDateYear > 2025 ? `2025 - ${curDateYear}` : '2025'} D */}
                © {curDateYear} D Kelly
            </p>
        </div>
    )
}

export default SiteDetails
