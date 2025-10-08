import React from 'react'
import { useFilter } from '@/contexts/FilteritemsContext'

function PortfolioFilteritems({ flexcolumn }) {
    // from Context
    const { items, onClickHandle } = useFilter()

    return (
        <ul
            className={`mr-auto mb-5 ml-auto flex w-fit flex-wrap gap-1 ${flexcolumn ? 'flex-col' : 'flex-row'}`}
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
            className={`hover:border-grey-07 hover:text-grey-02 border-grey-04 hover:bg-grey-08 mr-0.5 flex flex-[0_0_auto] cursor-pointer rounded-sm border px-2 py-0.5 lg:mr-1 ${isChecked && 'bg-grey-08'}`}
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
            <label className="mr-auto cursor-pointer pr-1">{label}</label>
            <span className="h-6 w-6 cursor-pointer">{icon}</span>
        </li>
    )
}

export default PortfolioFilteritems
