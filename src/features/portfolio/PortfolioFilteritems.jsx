import { useState } from 'react'

function Checkbox({ isChecked, label, checkHandler }) {
    return (
        <li>
            <input
                className="mb-1 mr-1.5 accent-grey-04"
                type="checkbox"
                id={label}
                checked={isChecked}
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
    { name: 'Tailwind', checked: false },
    { name: 'Wordpress', checked: false },
    { name: 'Certifications', checked: false },
]

function PortfolioFilteritems() {
    const [items, setItems] = useState(listItems)

    const onHandleChange = (index) => {
        // if 'All' is NOT true
        if (index === 0 && items[index].checked === false)
            return setItems(
                items.map((item) => {
                    return { ...item, checked: true }
                })
            )
        // if 'All' is true
        if (index === 0 && items[index].checked === true)
            return setItems(
                items.map((item) => {
                    return { ...item, checked: false }
                })
            )

        // set individual item
        setItems(
            items.map((item, curIndex) => {
                return curIndex === index
                    ? { ...item, checked: !item.checked }
                    : item
            })
        )
    }

    return (
        <>
            {items.map((menuitem, index) => (
                <Checkbox
                    key={index}
                    isChecked={menuitem.checked}
                    label={menuitem.name}
                    checkHandler={() => onHandleChange(index)}
                    index={index}
                />
            ))}
        </>
    )
}

export default PortfolioFilteritems
