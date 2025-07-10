// import placeholder from '@/assets/imgs/image-placeholder-square.png'
import placeholder from '@/assets/imgs/image-placeholder-landscape.png'
import React, { createContext, useContext, useState } from 'react'

const PortfolioItemContext = createContext()

function PortfolioItem({ children, projectKey }) {
    const [show, setShow] = useState(false)

    return (
        <PortfolioItemContext.Provider
            value={{
                show,
                setShow,
                projectKey,
            }}
        >
            {/* wrapper for all currently displayed items */}
            {/* <BgItemsWrapper show={show} /> */}
            {children}
        </PortfolioItemContext.Provider>
    )
}

// item container
function ItemWrapper({ children }) {
    const { show } = useContext(PortfolioItemContext)

    return (
        <div
            id="itemwrapper"
            className={`border-grey-04 bg-green-01 text-grey-02 flex border hover:brightness-110 ${show && 'absolute left-0 md:left-[15%] md:w-[70%] lg:left-[25%] lg:w-[50%]'}`}
        >
            {children}
        </div>
    )
}

// items backdrop wrapper
function BgItemsWrapper({ show }) {
    return (
        show && (
            <div
                id="BgItemsWrapper"
                // className="bg-black-01 absolute h-full w-full opacity-75 backdrop-blur-2xl"
                className="bg-black-01 absolute h-full w-full opacity-0"
            ></div>
        )
    )
}

// item inner layout wrapperz
function GridWrapper({ children }) {
    return (
        <div id="gridwrapper" className="grid grid-cols-2 items-baseline">
            {children}
        </div>
    )
}
function DivWrapper({ children }) {
    return <div id="divwrapper">{children}</div>
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
    const { show, setShow } = useContext(PortfolioItemContext)

    return (
        <span
            className="text-grey-01 m- col-span-1 mr-[4px] cursor-pointer justify-self-end"
            onClick={() => setShow(!show)}
        >
            ◻
        </span>
    )
}

function Description({ description }) {
    const { show } = useContext(PortfolioItemContext)

    return (
        <p className={`col-span-2 ${show ? 'block' : 'hidden'}`}>
            {description}
        </p>
    )
}

PortfolioItem.ItemWrapper = ItemWrapper
// test code - to delete or maybe keep
PortfolioItem.BgItemsWrapper = BgItemsWrapper

PortfolioItem.GridWrapper = GridWrapper
PortfolioItem.DivWrapper = DivWrapper
PortfolioItem.Img = Img
PortfolioItem.TagList = TagList
PortfolioItem.Title = Title
PortfolioItem.Maximize = Maximize
PortfolioItem.Description = Description

export default PortfolioItem
