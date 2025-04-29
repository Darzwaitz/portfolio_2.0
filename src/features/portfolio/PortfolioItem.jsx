// import placeholder from '@/assets/imgs/image-placeholder-square.png'
import placeholder from '@/assets/imgs/image-placeholder-landscape.png'
import React, { createContext, useRef } from 'react'

const PortfolioItemContext = createContext()

function showFullItem(e) {
    // e.target.className.add('hidden')
    // e.target.hidden = true
    console.log('clickd: ' + e.target.className)
}

function PortfolioItem({ children }) {
    const show = useRef(false)
    return (
        // item container
        <div className="border-grey-04 text-grey-02 flex border hover:brightness-110">
            <PortfolioItemContext.Provider value={show}>
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
            className="col-span-2 inline-block"
        />
    )
}
function TagList({ icon }) {
    return (
        // <ul className="inline-block w-1/2">
        <ul className="inline-block">
            {icon.map((icon) => (
                <React.Fragment key={icon}>
                    <li className="m-1 w-6" key={icon}>
                        {icon}
                    </li>
                </React.Fragment>
            ))}
        </ul>
    )
}
function Title({ title }) {
    return <h1 className="col-span-1 bg-blue-200 text-nowrap">{title}</h1>
}

function Maximize() {
    return (
        <span
            className="text-grey-01 m- col-span-1 mr-[4px] cursor-pointer justify-self-end"
            onClick={showFullItem}
        >
            ◻
        </span>
    )
}

function Description({ description, onclick, show }) {
    console.log(show)

    return (
        <p
            className="col-span-2 hidden"
            style={{ display: show ? 'block' : 'none' }}
            onClick={onclick}
        >
            {description}
        </p>
    )
}

PortfolioItem.Img = Img
PortfolioItem.TagList = TagList
PortfolioItem.Title = Title
PortfolioItem.Maximize = Maximize
PortfolioItem.Description = Description

export default PortfolioItem
