function SearchProjects() {
    let reveal = false
    return (
        <div
            onClick={() => (reveal = !reveal)}
            // onClick={() => console.log('clikd div')}
            className="flex w-full items-center justify-between"
        >
            <h1 className="pb-0.5">SEARCH PROJECTS</h1>
            {reveal && <div>test div</div>}
        </div>
    )
}

export default SearchProjects
