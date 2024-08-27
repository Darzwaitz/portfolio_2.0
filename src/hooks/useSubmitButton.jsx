import { useEffect, useState } from 'react'

// show submit button in filter items list
export function useSubmitButton(arrList) {
    const [showSubmit, setShowSubmit] = useState(false)

    useEffect(() => {
        function checkItem(item) {
            return item.checked == false
        }
        function checkItem2(item) {
            return item.checked == true
        }

        if (arrList.every(checkItem)) setShowSubmit(false)
        if (arrList.some(checkItem2)) setShowSubmit(true)
    }, [arrList, showSubmit])

    return showSubmit
}
