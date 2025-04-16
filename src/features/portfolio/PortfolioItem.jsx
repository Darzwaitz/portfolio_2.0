// import placeholder from '@/assets/imgs/image-placeholder-square.png'
import placeholder from '@/assets/imgs/image-placeholder-landscape.png'
import React, { createContext } from 'react'

const PortfolioItemContext = createContext()

function PortfolioItem({ children }) {
    return (
        <div className="border-grey-04 text-grey-02 flex w-auto border p-1.5 hover:brightness-110">
            <PortfolioItemContext.Provider value={children}>
                {children}
            </PortfolioItemContext.Provider>
        </div>
    )
}

// context child componentz
function Img() {
    return (
        <img
            src={placeholder}
            alt="placeholder image"
            className="inline-block"
        />
    )
}
function TagList({ icon }) {
    return (
        // <ul className="inline-block w-1/2">
        <ul className="inline-block">
            {icon.map((icon) => (
                <React.Fragment key={icon}>
                    <li className="m-2.5 w-6" key={icon}>
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
