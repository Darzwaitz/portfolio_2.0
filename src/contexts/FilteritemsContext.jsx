import { createContext, useContext, useState } from 'react'
import { useSubmitButton } from '../hooks/useSubmitButton'
import { useAllItemsChecked } from '../hooks/useAllItemsChecked'

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
        // 'All' object must ALWAYS be first object in items Array
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

    // hook needed for state issues
    const onAllItemsChecked = useAllItemsChecked(items, setItems)

    function onClickHandle(index) {
        // if 'All' is NOT true/unchecked - check all items including 'All'
        if (index === 0 && items[0].checked === false) {
            return setItems(
                items.map((item) => {
                    return { ...item, checked: true }
                })
            )
        }
        // if 'All' is true/checked - uncheck all items including 'All'
        if (index === 0 && items[0].checked === true) {
            // console.log('all true')

            return setItems(
                items.map((item) => {
                    return { ...item, checked: false }
                })
            )
        }

        // check individual item when ALL is unchecked
        if (items[0].checked === false) {
            setItems(
                items.map((item, curIndex) => {
                    return curIndex === index
                        ? { ...item, checked: !item.checked }
                        : item
                })
            )
            // hook to check 'All' if all items checked
            onAllItemsChecked
        }

        //
        // if 'All' is checked true, set it to false when individual item is unchecked
        // if at least 1 item is unchecked, then 'All' won't be true
        if (items[0].checked === true) {
            setItems(
                items.map((item, curIndex) => {
                    return curIndex === index
                        ? { ...item, checked: !item.checked }
                        : item
                })
            )
            items[0].checked = false
        }

        // ORIJ WORKIN
        // // set individual item
        // setItems(
        //     items.map((item, curIndex) => {
        //         return curIndex === index
        //             ? { ...item, checked: !item.checked }
        //             : item
        //     })
        // )
    }

    return (
        <FilteritemsContext.Provider
            value={{
                items,

                onClickHandle,
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
