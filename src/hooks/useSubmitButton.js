import { useEffect, useState } from 'react'

// show submit button in filter items list
export function useSubmitButton(arrList) {
    const [showSubmit, setShowSubmit] = useState(false)

    useEffect(() => {
        function checkItem(item) {
            return item.checked === this?.itemPresent
        }

        setShowSubmit(arrList.every(checkItem, { itemPresent: false }))
        setShowSubmit(arrList.some(checkItem, { itemPresent: true }))
    }, [arrList, showSubmit])

    return showSubmit
}
