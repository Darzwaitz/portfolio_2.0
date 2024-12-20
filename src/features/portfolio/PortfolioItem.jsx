// import placeholder from '@/assets/imgs/image-placeholder-square.png'
import placeholder from '@/assets/imgs/image-placeholder-landscape.png'
import React, { createContext } from 'react'

const PortfolioItemContext = createContext()

// importing data for each portfolio item
// const { title, description, tags } = project

// function PortfolioItem({ project }) {
function PortfolioItem({ children }) {
    // console.log(item.tags);
    return (
        <PortfolioItemContext.Provider value={children}>
            {/* // <div className="bg-green-400 inline-block m-1 p-2 rounded-s-sm "> */}
            {/* <div className=" rounded-s-sm  border border-grey-04 p-5 text-grey-02 hover:brightness-110"> */}
            {children}
            {/* </div> */}
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
function TagList({ icon }) {
    return (
        <ul className="inline-block w-1/2">
            {icon.map((icon) => (
                <React.Fragment key={icon}>
                    {/* <li key={i}>{tag}</li> */}
                    <li className="w-6" key={icon}>
                        {icon}
                    </li>
                </React.Fragment>
            ))}
        </ul>
    )
}
function Title({ title }) {
    return <h1 className="bg-blue-200">{title}</h1>
}
function Description({ description }) {
    return <h2 className="bg-red-200">{description}</h2>
}

PortfolioItem.Img = Img
PortfolioItem.TagList = TagList
PortfolioItem.Title = Title
PortfolioItem.Description = Description

export default PortfolioItem
