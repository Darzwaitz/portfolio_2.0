// import placeholder from '@/assets/imgs/image-placeholder-square.png'
import placeholder from '@/assets/imgs/image-placeholder-landscape.png'
import React, { createContext, useContext, useState } from 'react'
import useOutsideClick from '@/hooks/useOutsideClick'

import WindowDisplayButtons from '@/ui/buttons/WindowDisplayButtons'

// import GithubButton from '../../ui/buttons/GitHubButton'
import Tooltip from '@/features/tooltip/Tooltip'

import { Link } from 'react-router-dom'
import GithubIcon from '../../ui/buttons/assets/imgs/svgs/components/GithubIcon'

const PortfolioItemContext = createContext()

const itemPadding = 'px-[0.5rem]'

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
            className={`border-grey-04 text-grey-02 bg-black-01 flex rounded-[0.09rem] border hover:brightness-110 ${maximize && 'absolute inset-0 mx-auto h-max w-[80%] md:w-[70%] lg:w-[50%]'}`}
            // className={`border-grey-04 text-grey-02 bg-black-01 flex rounded-sm border hover:brightness-110 ${maximize && 'absolute inset-0 mx-auto h-max w-[min(200px_500px)]'}`}
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
            className={`${itemPadding} col-span-2 inline-block`}
        />
    )
}
function TagList({ icon }) {
    return (
        // <ul className="inline-block w-1/2">
        <ul className="border-r-grey-04 h-full border-r">
            {icon.map((icon) => (
                <React.Fragment key={icon}>
                    <li className="w-8 p-1" key={icon}>
                        {icon}
                    </li>
                </React.Fragment>
            ))}
        </ul>
    )
}

function Title({ title }) {
    return (
        <h1
            className={`${itemPadding} col-span-2 py-1.5 leading-none text-wrap`}
        >
            {title}
        </h1>
    )
}

// minimize, restore/maximize and Close buttons within here
function PortfolioCardButtons() {
    const { maximize, setMaximize } = useContext(PortfolioItemContext)

    // handle click outside of portfolio item in specific areas i.e. not the filter items section
    const handleMaximize = useOutsideClick(maximize, setMaximize)

    return (
        <WindowDisplayButtons
            portfolioItemStyles={true}
            maximize={maximize}
            onClick={handleMaximize}
            id={'portfolio-card-buttons'}
        />
    )
}

function Description({ description }) {
    const { maximize } = useContext(PortfolioItemContext)

    return (
        maximize && (
            <p
                id="description"
                className={`col-span-2 flex flex-col pr-2.5 pb-5`}
            >
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

function ItemFooter() {
    // const { maximize } = useContext(PortfolioItemContext)
    return (
        <div
            // className={`${itemPadding} border-t-grey-04 col-span-full grid w-full border-0 border-t`}
            className={`border-t-grey-04 col-span-full grid w-full border-0 border-t`}
        >
            <div className="ml-auto w-fit">
                {/* <Link to={link}> */}
                <Link>
                    <Tooltip msg={'Github Profile'} arrowDirection={'down'} />
                    {/* <GithubIcon defaultColor={defaultColor} /> */}
                    <GithubIcon />
                </Link>
                {/* <GithubButton /> */}
            </div>
        </div>
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
PortfolioItem.PortfolioCardButtons = PortfolioCardButtons
PortfolioItem.Description = Description
PortfolioItem.ItemFooter = ItemFooter

export default PortfolioItem
