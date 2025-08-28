// import placeholder from '@/assets/imgs/image-placeholder-square.png'
import placeholder from '@/assets/imgs/image-placeholder-landscape.png'
import React, { createContext, useContext, useState } from 'react'
import useOutsideClick from '@/hooks/useOutsideClick'

import BrowserWindowButtons from '../../ui/header/BrowserWindowbuttons'

// import MinimizeButtonIcon from '../buttons/MinimizeButtonIcon'
// import MaximizeButtonIcon from '@/ui/buttons/MaximizeButtonIcon'
// import RestoreButtonIcon from '@/ui/buttons/RestoreButtonIcon'
// import CloseButtonIcon from '../buttons/CloseButtonIcon'

//
//
//
//
// TODO LOOKUP RENDER PROPS AND OTHER PATTERNS
//
//
//
//
//

const PortfolioItemContext = createContext()

function PortfolioItem({ children, projectKey }) {
    const [maximize, setMaximize] = useState(false)

    return (
        <PortfolioItemContext.Provider
            value={{
                maximize,
                setMaximize,
                projectKey,
            }}
        >
            {/* wrapper for all currently displayed items */}
            <BgItemsWrapper maximize={maximize} />
            {children}
        </PortfolioItemContext.Provider>
    )
}

// items backdrop wrapper
function BgItemsWrapper({ maximize }) {
    return (
        maximize && (
            <div
                id="bg-items-wrapper"
                className="bg-black-02 absolute h-full w-full opacity-90"
            ></div>
        )
    )
}
// item container
function ItemWrapper({ children }) {
    const { maximize } = useContext(PortfolioItemContext)

    return (
        <div
            id="itemwrapper"
            className={`border-grey-04 text-grey-02 bg-black-01 flex rounded-sm border hover:brightness-110 ${maximize && 'absolute left-0 md:left-[15%] md:w-[70%] lg:left-[25%] lg:w-[50%]'}`}
        >
            {children}
        </div>
    )
}

// padding for outside of maximised item
function PaddingBottom() {
    return <div className="bg-yellow-01 h-2.5 w-full"></div>
}

// item inner layout wrapperz
function GridWrapper({ children }) {
    return <div className="grid grid-cols-2">{children}</div>
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
            className="col-span-2 inline-block p-[0_0.5rem_0.5rem_0]"
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

function PortfolioWindowButtons() {
    return <BrowserWindowButtons OtherStyles />
}

function MaximizeButton() {
    const { maximize, setMaximize } = useContext(PortfolioItemContext)

    const handleMaximize = useOutsideClick(maximize, setMaximize)

    return (
        <span
            // some temp styles to be removed when correct icon added
            className="col-span-1 m-1 flex h-6 w-6 cursor-pointer place-content-center justify-self-end"
            id="maximize-button"
            onClick={handleMaximize}
        >
            {/* iconz to be updated */}
            {/* {maximize ? <RestoreButtonIcon /> : <MaximizeButtonIcon />} */}
        </span>
    )
}

function Description({ description }) {
    const { maximize } = useContext(PortfolioItemContext)

    return (
        maximize && (
            <p className={`col-span-2 flex flex-col pr-2.5 pb-5`}>
                {description}
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum fugit rerum nihil cum aperiam laboriosam libero ducimus,
                itaque, vitae quibusdam sint praesentium voluptates id,
                inventore in culpa nihil possimus, voluptate fugiat dolores
                numquam officia nobis omnis non doloribus aliquid error quisquam
                quaerat? Harum dignissimos tempora quod dolores. Tempore
                reiciendis sint rerum impedit nemo, eaque nesciunt id ullam
                quasi, explicabo alias officia, totam tempora necessitatibus
                debitis, asperiores quod reprehenderit a ducimus ad dolorem
                molestiae maiores provident expedita consectetur architecto qui
                laborum! Saepe maiores reprehenderit illum veniam vero possimus
                dolores.
            </p>
        )
    )
}

PortfolioItem.ItemWrapper = ItemWrapper
PortfolioItem.PaddingBottom = PaddingBottom
PortfolioItem.BgItemsWrapper = BgItemsWrapper
PortfolioItem.GridWrapper = GridWrapper
PortfolioItem.DivWrapper = DivWrapper
PortfolioItem.Img = Img
PortfolioItem.TagList = TagList
PortfolioItem.Title = Title
PortfolioItem.PortfolioWindowButtons = PortfolioWindowButtons
PortfolioItem.MaximizeButton = MaximizeButton
PortfolioItem.Description = Description

export default PortfolioItem
