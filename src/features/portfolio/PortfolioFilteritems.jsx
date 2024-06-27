import { useState } from 'react'

function Checkbox({ isChecked, label, checkHandler }) {
    return (
        <li>
            <input
                className="mb-1 mr-1.5 accent-grey-04"
                type="checkbox"
                id={label}
                value={isChecked}
                onChange={checkHandler}
            />
            <label htmlFor={label}>{label}</label>
        </li>
    )
}

const listItems = [
    { name: 'All', checked: false },
    { name: 'React', checked: false },
    { name: 'Vue', checked: false },
    { name: 'Angular', checked: false },
    { name: 'JavaScript', checked: false },
    { name: 'Html, Css, Scss', checked: false },
    { name: 'Wordpress', checked: false },
    { name: 'Certifications', checked: false },
]

function PortfolioFilteritems() {
    const [items, setItems] = useState(listItems)

    const onHandleChange = (index) => {
        setItems(
            items.map((item, curIndex) => {
                return curIndex === index
                    ? { ...item, checked: !item.checked }
                    : item
            })
        )
    }
    return (
        <form className="flex flex-col">
            {items.map((menuitem, index) => (
                <Checkbox
                    key={index}
                    isChecked={menuitem.checked}
                    label={menuitem.name}
                    checkHandler={() => onHandleChange(index)}
                    index={index}
                />
            ))}
        </form>
    )
}

export default PortfolioFilteritems
