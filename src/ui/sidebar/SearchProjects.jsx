import { useState } from 'react'

function List() {
    return (
        <div>
            <h1>test div</h1>
        </div>
    )
}
function SearchProjects() {
    // reveal/hide dropdown menu
    let [reveal, setReveal] = useState(false)

    function handleReveal() {
        setReveal(!reveal)
    }

    return (
        <div className="flex w-full items-center justify-between">
            <h1
                onClick={function () {
                    handleReveal()
                }}
                className="pb-0.5"
            >
                SEARCH PROJECTS
            </h1>
            <div> {reveal && <List />}</div>
        </div>
    )
}

export default SearchProjects
