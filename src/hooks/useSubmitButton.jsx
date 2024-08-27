import { useEffect, useState } from 'react'

// show submit button in filter items list
export function useSubmitButton(arrList) {
    const [showSubmit, setShowSubmit] = useState(false)

    useEffect(() => {
        function checkItem(item) {
            return item.checked === this?.divisor
        }

        setShowSubmit(arrList.every(checkItem, { divisor: false }))
        setShowSubmit(arrList.some(checkItem, { divisor: true }))
    }, [arrList, showSubmit])

    return showSubmit
}
