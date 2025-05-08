import React from 'react'
import { useFilter } from '@/contexts/FilteritemsContext'

// list
function PortfolioFilteritems({ flexcolumn }) {
    // from Context
    const { items, onChangeHandle } = useFilter()

    return (
        <ul
            // className={`mb-5 flex justify-center ${flexcolumn ? 'flex-col' : 'flex-row'}`}
            className={`m-auto mb-5 flex flex-wrap justify-center ${flexcolumn ? 'flex-col' : 'flex-row'}`}
        >
            {items.map((menuitem, index) => (
                <React.Fragment key={index}>
                    <Checkbox
                        isChecked={menuitem.checked}
                        label={menuitem.name}
                        checkHandler={() => {
                            onChangeHandle(index)
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
        <li className="mr-5 flex items-center">
            {/* <div className="flex items-center"> */}
            <input
                className="accent-grey-04 mr-1.5"
                type="checkbox"
                id={label}
                checked={isChecked}
                onChange={checkHandler}
            />
            <label className="mr-1" htmlFor={label}>
                {label}
            </label>
            <span className="h-6 w-6">{icon}</span>
            {/* </div> */}
        </li>
    )
}

export default PortfolioFilteritems
