function PortfolioFilteritems() {
    function PortfolioMenuItem({ children }) {
        return (
            <li>
                <h1 className="pb-0.5">{children}</h1>
            </li>
        )
    }
    return (
        <>
            {[
                'All',
                'React',
                'Vue',
                'Angular',
                'JavaScript',
                'Html, Css, Scss',
                'Wordpress',
                'Certifications',
            ].map((menuitem) => (
                <PortfolioMenuItem
                    key={menuitem.key}
                    className="mb-[1.57rem] flex cursor-text  border-b-[1px] border-t-[1px] border-b-grey-04 border-t-grey-04 p-1 pr-4 text-sm text-grey-02 hover:brightness-110"
                >
                    <input
                        type="checkbox"
                        id={menuitem}
                        name={menuitem}
                        value={menuitem}
                    />
                    <label htmlFor={menuitem}> {menuitem}</label>
                </PortfolioMenuItem>
            ))}
        </>
    )
}

export default PortfolioFilteritems
