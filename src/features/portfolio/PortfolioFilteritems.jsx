import React from 'react'
import { useFilter } from '../../contexts/FilteritemsContext'

function Checkbox({ isChecked, label, checkHandler, icon }) {
    return (
        <li className="mr-5">
            <div className="flex items-center">
                <input
                    className=" mr-1.5 accent-grey-04"
                    type="checkbox"
                    id={label}
                    checked={isChecked}
                    onChange={checkHandler}
                />
                <label className="mr-1" htmlFor={label}>
                    {label}
                </label>
                <span className="h-6 w-6">{icon}</span>
            </div>
        </li>
    )
}

function PortfolioFilteritems() {
    // from Context
    const { items, onChangeHandle } = useFilter()

    return (
        <>
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
        </>
    )
}

export default PortfolioFilteritems
