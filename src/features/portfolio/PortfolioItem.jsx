// import placeholder from '@/assets/imgs/image-placeholder-square.png'
import placeholder from '@/assets/imgs/image-placeholder-landscape.png'
// import useOutsideClick from '../../hooks/useOutsideClick'
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
            <BgItemsWrapper show={show} />
            {children}
        </PortfolioItemContext.Provider>
    )
}

// items backdrop wrapper

function BgItemsWrapper({ show }) {
    return (
        show && (
            <div
                id="bg-items-wrapper"
                className="bg-black-01 absolute h-full w-full opacity-90"
                // onClick={() => console.log('clikdd BgWrapper')}
            ></div>
        )
    )
}
// item container
function ItemWrapper({ children }) {
    const { show } = useContext(PortfolioItemContext)
    // console.log(ref)

    return (
        <div
            id="itemwrapper"
            className={`border-grey-04 text-grey-02 bg-black-01 flex rounded-sm border hover:brightness-110 ${show && 'absolute left-0 md:left-[15%] md:w-[70%] lg:left-[25%] lg:w-[50%]'}`}
        >
            {children}
        </div>
    )
}

// padding for outside of maximised item
function PaddingBottom() {
    return <div className="h-2.5 w-full"></div>
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

// function onCall(firstCall) {
//     console.log('onCall')
//     window.removeEventListener('click', firstCall)
// }
function onCall() {
    console.log('onCall')
}

function Maximize() {
    const { show, setShow } = useContext(PortfolioItemContext)
    // const { setShow } = useContext(PortfolioItemContext)
    // const call = useOutsideClick
    // document.addEventListener('click', () => console.log('onCALLED'))

    // handleMinTwo()

    // function handleMinTwo() {
    //     console.log(`2nd: ${show}`)
    // }
    // useEffect(() => {
    function handleMinimize() {
        // call()
        setTimeout(() => document.addEventListener('click', firstCall))

        function firstCall() {
            // console.log('firstCall')

            onCall()
            document.removeEventListener('click', firstCall)
        }
        console.log(`1st: ${show}`)
        setShow(() => !show)
        // window.addEventListener('click', () => console.log('onCALLED'))

        // if (show === true) {
        // }
    }
    // }, [show, setShow])

    // const curElemId = e.target.id
    // if (
    //     curElemId === 'itemscontainerwrapper' ||
    //     curElemId === 'itemscontainerwrapper' ||
    //     curElemId === 'bg-items-wrapper'
    // )
    //     console.log(curElemId)

    return (
        <span
            className="text-grey-01 m- col-span-1 mr-[4px] cursor-pointer justify-self-end"
            onClick={handleMinimize}
        >
            ◻
        </span>
    )
}

function Description({ description }) {
    const { show } = useContext(PortfolioItemContext)

    return (
        show && (
            <p className={`col-span-2 flex flex-col`}>
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
                {description}
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
PortfolioItem.Maximize = Maximize
PortfolioItem.Description = Description

export default PortfolioItem
