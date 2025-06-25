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
            // console.log('all NOT true')
            return setItems(
                items.map((item) => {
                    return { ...item, checked: true }
                })
            )
        }
        // if 'All' is true
        if (index === 0 && items[index].checked === true) {
            // console.log('all true')

            return setItems(
                items.map((item) => {
                    return { ...item, checked: false }
                })
            )
        }

        // set individual item when ALL true
        if (items[0].checked === false) {
            setItems(
                items.map((item, curIndex) => {
                    return curIndex === index
                        ? { ...item, checked: !item.checked }
                        : item
                })
            )
        }

        // if 'All' is checked true, set it to false when individual item changed
        if (items[0].checked === true) {
            // console.log('when ALL true')

            setItems(
                items.map((item, curIndex) => {
                    return curIndex === index
                        ? { ...item, checked: !item.checked }
                        : item
                })
            )
            items[0].checked = false
        }

        // TEMP CODE HERE TO WORK ON
        // checked 'All' to true if ALL individual items are checked true
        // if (items[0].checked === false) {
        //     if (
        //         items.every(
        //             (item) => item.name !== 'All' && item.checked === true
        //         )
        //     ) {
        //         items[0].checked = true
        //     }
        // }

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
