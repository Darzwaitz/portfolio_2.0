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
        //NEW
        // if ALL is true, but 1 is unmarked after, turn of single All checkbox too
        if (index !== 0 && items[0].checked === true) {
            console.log('cliiikd')
            setItems(items[0].checked === false)

            console.log(items[0].checked)
        }
        // /NEW

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
