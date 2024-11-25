import placeholder from '@/assets/imgs/image-placeholder-square.png'
import { createContext } from 'react'

const PortfolioItemContext = createContext()

// importing data for each portfolio item
// const { title, description, tags } = project

// function PortfolioItem({ project }) {
function PortfolioItem({ children }) {
    // console.log(item.tags);
    return (
        <PortfolioItemContext.Provider>
            {/* // <div className="bg-green-400 inline-block m-1 p-2 rounded-s-sm "> */}
            <div className=" rounded-s-sm  border border-grey-04 p-5 text-grey-02 hover:brightness-110">
                {children}
                {/* <h4>PortfolioItem comp item</h4> */}
                {/* <img
                src={placeholder}
                alt="placeholder image"
                className="inline-block w-1/2"
            /> */}
                {/* <ul className="inline-block w-1/2">
                {tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                ))}
            </ul> */}
                {/* <h1 className="bg-blue-200">{title}</h1> */}
                <br />
                {/* <h2 className="bg-red-200">{description}</h2> */}
                {/* <br /> */}
            </div>
        </PortfolioItemContext.Provider>
    )
}

// context child componentz
function Img() {
    return (
        <img
            src={placeholder}
            alt="placeholder image"
            className="inline-block w-1/2"
        />
    )
}
function TagList() {
    return (
        <ul className="inline-block w-1/2">
            {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
            ))}
        </ul>
    )
}
function Title() {
    return <h1 className="bg-blue-200">{title}</h1>
}
function Description() {
    return <h2 className="bg-red-200">{description}</h2>
}

export default PortfolioItem
