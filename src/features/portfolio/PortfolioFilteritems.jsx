import { useState } from 'react'

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
    const [isChecked, setIsChecked] = useState(false)

    const onHandleChange = (index) => {
        setItems(
            items.map((item, curIndex) => {
                return curIndex === index
                    ? { ...items, checked: !item.checked }
                    : item
            })
        )
    }
    return (
        <form className="flex flex-col">
            {listItems.map((menuitem, i) => (
                <li key={i}>
                    <input
                        className="mb-1 mr-1.5 accent-grey-04"
                        type="checkbox"
                        id={menuitem}
                        name={menuitem}
                        value={menuitem}
                    />
                    <label htmlFor={menuitem}>{menuitem}</label>
                </li>
            ))}
        </form>
    )
}

export default PortfolioFilteritems
