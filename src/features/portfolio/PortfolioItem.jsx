function PortfolioItem({ project }) {
    const { title, description, tags } = project

    // console.log(item.tags);
    return (
        // <div className="bg-green-400 inline-block m-1 p-2 rounded-s-sm ">
        <div className="rounded-s-sm  border border-grey-04 p-3 text-grey-02 hover:brightness-110">
            <h4>PortfolioItem comp item</h4>

            <h1 className="bg-blue-200">{title}</h1>
            <br />
            <h2 className="bg-red-200">{description}</h2>
            <br />
            <ul>
                {tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default PortfolioItem
