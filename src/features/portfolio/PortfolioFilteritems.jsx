import { useState } from 'react'

function Checkbox({ isChecked, menuitem, checkHandler, index }) {
    return (
        <li>
            <input
                className="mb-1 mr-1.5 accent-grey-04"
                type="checkbox"
                checked={isChecked}
                id={index}
                onChange={checkHandler}
            />
            <label htmlFor={index}>{menuitem.name}</label>
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
            items.map((item, curIndex) =>
                // console.log(item)
                curIndex === index ? { ...items, checked: !item.checked } : item
            )
        )
    }
    return (
        <form className="flex flex-col">
            {listItems.map((menuitem, i) => (
                <Checkbox
                    key={i}
                    isChecked={menuitem.checked}
                    checkHandler={() => onHandleChange(i)}
                    menuitem={menuitem}
                    index={i}
                />
            ))}
            {/* <pre>{JSON.stringify(listItems, null, 2)}</pre> */}
        </form>
    )
}

export default PortfolioFilteritems
