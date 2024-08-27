import { createContext, useContext, useState } from 'react'
import { useSubmitButton } from '../hooks/useSubmitButton'

const FilteritemsContext = createContext()

function FilteritemsProvider({ children }) {
    const [items, setItems] = useState([
        { name: 'All', checked: false },
        { name: 'React', checked: false },
        { name: 'Vue', checked: false },
        { name: 'Angular', checked: false },
        { name: 'JavaScript', checked: false },
        { name: 'Html, Css, Scss', checked: false },
        { name: 'Tailwind', checked: false },
        { name: 'Wordpress', checked: false },
        { name: 'Certifications', checked: false },
    ])

    // hook needed for state issues
    const onShowSubmit = useSubmitButton(items)

    function onChangeHandle(index) {
        // if 'All' is NOT true
        if (index === 0 && items[index].checked === false) {
            return setItems(
                items.map((item) => {
                    return { ...item, checked: true }
                })
            )
        }
        // if 'All' is true
        if (index === 0 && items[index].checked === true) {
            return setItems(
                items.map((item) => {
                    return { ...item, checked: false }
                })
            )
        }

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
        <FilteritemsContext.Provider
            value={{
                items,
                onChangeHandle,
                onShowSubmit,
            }}
        >
            {children}
        </FilteritemsContext.Provider>
    )
}

function useFilter() {
    const context = useContext(FilteritemsContext)
    if (!context === undefined)
        throw new Error(
            'FilteritemsContext is being used outside of the FilteritemsProvider'
        )
    return context
}

export { FilteritemsProvider, useFilter }
