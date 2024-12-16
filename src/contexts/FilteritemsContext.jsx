import { createContext, useContext, useState } from 'react'
import { useSubmitButton } from '../hooks/useSubmitButton'

import AllFolderIcon from '../features/portfolio/assets/imgs/svg/components/AllFolderIcon'
import ReactIcon from '../features/portfolio/assets/imgs/svg/components/ReactIcon'
import VueIcon from '../features/portfolio/assets/imgs/svg/components/VueIcon'
import AngularIcon from '../features/portfolio/assets/imgs/svg/components/AngularIcon'
import JavaScriptIcon from '../features/portfolio/assets/imgs/svg/components/JavaScriptIcon'
import ScssIcon from '../features/portfolio/assets/imgs/svg/components/ScssIcon'
import TailwindIcon from '../features/portfolio/assets/imgs/svg/components/TailwindIcon'
import WordpressIcon from '../features/portfolio/assets/imgs/svg/components/WordpressIcon'

const FilteritemsContext = createContext()

function FilteritemsProvider({ children }) {
    const [items, setItems] = useState([
        { name: 'All', checked: false, icon: <AllFolderIcon /> },
        { name: 'React', checked: false, icon: <ReactIcon /> },
        { name: 'Vue', checked: false, icon: <VueIcon /> },
        { name: 'Angular', checked: false, icon: <AngularIcon /> },
        { name: 'JavaScript', checked: false, icon: <JavaScriptIcon /> },
        { name: 'Scss', checked: false, icon: <ScssIcon /> },
        // // unused { name: 'Html', checked: false },
        { name: 'Tailwind', checked: false, icon: <TailwindIcon /> },
        { name: 'Wordpress', checked: false, icon: <WordpressIcon /> },
        // // unused { name: 'Certifications', checked: false },
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
