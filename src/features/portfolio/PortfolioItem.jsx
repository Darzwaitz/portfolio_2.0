// import placeholder from '@/assets/imgs/image-placeholder-square.png'
import placeholder from '@/assets/imgs/image-placeholder-landscape.png'
import React, { createContext, useContext, useRef, useState } from 'react'
import useOutsideClick from '@/hooks/useOutsideClick'
// import useCurPortfolioList from './hooks/useCurPortfolioList'
import useDeletePortfolioItem from './hooks/useDeletePortfolioItem'

import WindowDisplayButtons from '@/ui/buttons/WindowDisplayButtons'

import GithubButton from '@/ui/buttons/GitHubButton'
import GoLiveButton from './buttons/GoLiveButton'

import { SvgSettingsSmall } from '../../assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, hover } = SvgSettingsSmall()

const PortfolioItemContext = createContext()

const itemPadding = 'px-[0.5rem]'

function PortfolioItem({ children, projectKey }) {
    const [maximize, setMaximize] = useState(false)
    const curItem = useRef(null)
    const [show, setShow] = useState(true)

    // console.log(curItem.current)

    return (
        <PortfolioItemContext.Provider
            value={{
                maximize,
                setMaximize,
                projectKey,
                curItem,
                show,
                setShow,
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
function ItemWrapper({ children, id }) {
    const { maximize, curItem, show } = useContext(PortfolioItemContext)

    return (
        <div
            id={id}
            ref={curItem}
            className={`${show ? '' : 'hidden'} border-grey-04 text-grey-02 bg-black-01 flex rounded-[0.09rem] border hover:brightness-110 ${maximize ? 'absolute inset-0 mx-auto h-max w-[80%] md:w-[70%] lg:w-[50%]' : ''}`}
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
        <h2
            className={`${itemPadding} col-span-2 py-1.5 leading-none text-wrap`}
        >
            {title}
        </h2>
    )
}

// minimize, restore/maximize and Close buttons within here
function PortfolioCardButtons() {
    // const { maximize, setMaximize, show, setShow } = useContext(PortfolioItemContext)
    const { maximize, setMaximize, curItem } = useContext(PortfolioItemContext)

    // handle click outside of portfolio item in specific areas i.e. not the filter items section
    const handleMaximize = useOutsideClick(maximize, setMaximize)

    // const curFilteredItemList = useDeletePortfolioItem()
    const deleteId = curItem.current?.id
    const curDeleteItem = useDeletePortfolioItem(deleteId)
    // const curFilteredItemList = useCurPortfolioList()
    // console.log(curFilteredItemList)

    // const deleteItem = function () {
    //     // console.log('ok')

    //     curFilteredItemList(deleteId)
    // }
    // const deleteItemB = function () {
    //     console.log(deleteId)

    //     curDeleteItem

    //     // console.log(curFilteredItemList)

    //     // console.log(deleteId)
    //     // return deleteId
    // }
    // // test - this works for displaying non of an item - doesn't update item list state
    // const deleteItem = function () {
    //     setShow(false)
    //     // console.log(e.target.parentNode)
    //     // console.log(curItem.current.id)
    //     console.log(show)
    // }

    return (
        <WindowDisplayButtons
            portfolioItemStyles={true}
            maximize={maximize}
            handleMaximize={handleMaximize}
            // ref={curItem.current.id}
            // onClick={deleteItemB}
            onClick={() => curDeleteItem}
            // onClick={() => curDeleteItem, () => curFilteredItemList}
            id={'portfolio-card-buttons'}
        />
    )
}

function Description({ description }) {
    const { maximize } = useContext(PortfolioItemContext)

    return (
        maximize && (
            <p
                // id="description"
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

function ItemFooter({ githubProjectLink, liveProjectLink }) {
    // const { maximize } = useContext(PortfolioItemContext)
    return (
        <div
            className={`border-t-grey-04 col-span-full flex w-full border-0 border-t`}
        >
            {githubProjectLink && (
                <GithubButton
                    githubProjectLink={githubProjectLink}
                    iconSize={iconSize}
                    hover={hover}
                    defaultColor={defaultColor}
                    tooltipMsg="Project on Github"
                    portfolioItemStyles={true}
                />
            )}
            {liveProjectLink && (
                <GoLiveButton
                    liveProjectLink={liveProjectLink}
                    iconSize={iconSize}
                    hover={hover}
                    defaultColor={defaultColor}
                    tooltipMsg="Go to live Project"
                />
            )}
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
