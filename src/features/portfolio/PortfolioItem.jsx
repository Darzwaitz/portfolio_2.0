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
            className={`border-grey-04 text-grey-02 flex border hover:brightness-110 ${show && 'absolute left-0 md:left-[15%] md:w-[70%] lg:left-[25%] lg:w-[50%]'}`}
        >
            {children}
        </div>
    )
}
// item inner layout wrapperz
function GridWrapper({ children }) {
    return <div className="grid grid-cols-2 items-baseline">{children}</div>
}
function DivWrapper({ children }) {
    return <div>{children}</div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            fugit rerum nihil cum aperiam laboriosam libero ducimus, itaque,
            vitae quibusdam sint praesentium voluptates id, inventore in culpa
            tempora quod dolores. Tempore reiciendis sint rerum impedit nemo,
            nihil possimus, voluptate fugiat dolores numquam officia nobis omnis
            non doloribus aliquid error quisquam quaerat? Harum dignissimos
            eaque nesciunt id ullam quasi, explicabo alias officia, totam
            tempora necessitatibus debitis, asperiores quod reprehenderit a
            ducimus ad dolorem molestiae maiores provident expedita consectetur
            architecto qui laborum! Saepe maiores reprehenderit illum veniam
            vero possimus dolores.
            {description}
        </p>
    )
}

PortfolioItem.ItemWrapper = ItemWrapper
PortfolioItem.GridWrapper = GridWrapper
PortfolioItem.DivWrapper = DivWrapper
PortfolioItem.Img = Img
PortfolioItem.TagList = TagList
PortfolioItem.Title = Title
PortfolioItem.Maximize = Maximize
PortfolioItem.Description = Description

export default PortfolioItem
