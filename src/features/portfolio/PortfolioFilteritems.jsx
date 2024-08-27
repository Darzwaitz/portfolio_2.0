import { useFilter } from '../../contexts/FilteritemsContext'

function Checkbox({ isChecked, label, checkHandler }) {
    return (
        <li className="mr-5">
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

function PortfolioFilteritems() {
    // from Context
    const { items, onChangeHandle } = useFilter()

    return (
        <>
            {items.map((menuitem, index) => (
                <Checkbox
                    isChecked={menuitem.checked}
                    label={menuitem.name}
                    checkHandler={() => {
                        onChangeHandle(index)
                    }}
                    key={index}
                />
            ))}
        </>
    )
}

export default PortfolioFilteritems
