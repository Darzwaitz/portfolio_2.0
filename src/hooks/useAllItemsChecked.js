export function useAllItemsChecked(items, setItems) {
    // // check 'All'/items[0] if all other individual items checked
    // and 'All' is unchecked
    if (items[0].checked === false) {
        // create new array to iterate - doesn't include 'All' item
        const tempItems = items.slice(1, items.length)

        const checkItem = (curItem) => curItem.checked === true

        if (tempItems.every(checkItem)) {
            setItems(
                items.map((item, curIndex) => {
                    return curIndex === 0 ? { ...item, checked: true } : item
                })
            )
        }
    }
}
