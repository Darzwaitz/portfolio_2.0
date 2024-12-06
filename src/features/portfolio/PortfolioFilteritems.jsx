import React from 'react'
import { useFilter } from '../../contexts/FilteritemsContext'

function Checkbox({ isChecked, label, checkHandler, icon }) {
    return (
        <li className="mr-5">
            <div className="flex">
                <input
                    className="mb-1 mr-1.5 accent-grey-04"
                    type="checkbox"
                    id={label}
                    checked={isChecked}
                    onChange={checkHandler}
                />
                <label htmlFor={label}>{label}</label>
                <span>{icon}</span>
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
                        key={Math.floor(Math.random())}
                        // index={index}
                    />
                </React.Fragment>
            ))}
        </>
    )
}

export default PortfolioFilteritems
