import placeholder from '@/assets/imgs/image-placeholder-square.png'

function PortfolioItem({ project }) {
    const { title, description, tags } = project

    // console.log(item.tags);
    return (
        // <div className="bg-green-400 inline-block m-1 p-2 rounded-s-sm ">
        <div className=" rounded-s-sm  border border-grey-04 p-5 text-grey-02 hover:brightness-110">
            {/* <h4>PortfolioItem comp item</h4> */}
            <img
                src={placeholder}
                alt="placeholder image"
                className="inline-block w-1/2"
            />
            <ul className="inline-block w-1/2">
                {tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                ))}
            </ul>
            <h1 className="bg-blue-200">{title}</h1>
            <br />
            <h2 className="bg-red-200">{description}</h2>
            <br />
        </div>
    )
}

export default PortfolioItem
