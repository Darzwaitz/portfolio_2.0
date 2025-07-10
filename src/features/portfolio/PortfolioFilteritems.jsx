import React from 'react'
import { useFilter } from '@/contexts/FilteritemsContext'

// list
function PortfolioFilteritems({ flexcolumn, width }) {
    // function PortfolioFilteritems({ flexcolumn }) {
    // from Context
    const { items, onClickHandle } = useFilter()

    return (
        <ul
            className={`mx-auto mb-5 flex flex-wrap gap-1 lg:justify-center ${width ? '@sm:@min-lg:w-[40rem]' : ''} ${flexcolumn ? 'flex-col' : 'flex-row'}`}
            // className={`m-auto mb-5 flex flex-wrap justify-center gap-1 ${flexcolumn ? 'flex-col' : 'flex-row'}`}
        >
            {items.map((menuitem, index) => (
                <React.Fragment key={index}>
                    <Checkbox
                        isChecked={menuitem.checked}
                        label={menuitem.name}
                        checkHandler={() => {
                            onClickHandle(index)
                        }}
                        icon={menuitem.icon}
                    />
                </React.Fragment>
            ))}
        </ul>
    )
}

// list item
function Checkbox({ isChecked, label, checkHandler, icon }) {
    return (
        <li
            className={`hover:bg-grey-08 mr-5 flex cursor-pointer items-center rounded-sm px-1.5 ${isChecked && 'bg-grey-08'}`}
            // onChange={checkHandler}
            onClick={checkHandler}
        >
            <input
                className="accent-grey-04 mr-1.5 cursor-pointer"
                type="checkbox"
                id={label}
                // onChange needs a function sent in
                onChange={() => {
                    return null
                }}
                checked={isChecked}
            />
            {/* <label className="mr-1 cursor-pointer" htmlFor={label}> */}
            <label className="mr-1 cursor-pointer">{label}</label>
            <span className="h-6 w-6 cursor-pointer">{icon}</span>
        </li>
    )
}

export default PortfolioFilteritems
