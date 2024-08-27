import { createContext, useContext, useState } from 'react'

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

    // show submit button in filter items list
    const [showSubmit, setShowSubmit] = useState(false)

    function onChangeHandle(index) {
        // setShowSubmit(true)
        checkIfFalse()

        function checkIfFalse() {
            function checkItem(item) {
                return item.checked === false
            }
            // items.every(checkItem) ? setShowSubmit(true) : setShowSubmit(false)
            if (items.every(checkItem)) {
                // initial click/change set reveal submit button to true
                setShowSubmit(false)

                console.log('checkdFalse')
            }
        }

        // function checkItem(item) {
        //     return item.checked === false
        // }
        // if (items.some(checkItem)) {
        //     // initial click/change set reveal submit button to true
        //     setShowSubmit(true)

        //     console.log('checkdTrue')
        // }

        // function checkIf(params) {

        // }

        // if()

        // if (!items.every(checkItem)) {
        //     // initial click/change set reveal submit button to true
        //     setShowSubmit(false)

        //     console.log('checkdFalse')
        // }

        // else {
        //     setShowSubmit(false)
        // }

        // function innerFunct() {
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
            // outerFunc()
            // setShowSubmit(false)

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
        // }
        // innerFunct()
        // setShowSubmit(true)

        // function outerFunc() {
        //     setShowSubmit(false)
        //     console.log('outerFunc called')
        // }
        // function hideSubmit() {
        //     // if 'All' is NOT true
        //     if (index === 0 && items[index].checked === false) {
        //         setShowSubmit(false)
        //     }
        // }
        // hideSubmit()

        // console.log('testee')
    }

    function checkItemsListBoolean(secondItemsList) {
        // function checkItem(item) {
        //     return item.checked === false
        // }
        // if (items.every(checkItem)) console.log('checkd')

        // console.log(items)

        console.log(secondItemsList)

        // function checkItem() {
        //     console.log('testy')
        // }
        // checkItem()

        // if (items.every(checkItem)) setShowSubmit(true)
    }

    return (
        <FilteritemsContext.Provider
            value={{ items, onChangeHandle, showSubmit, checkItemsListBoolean }}
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
