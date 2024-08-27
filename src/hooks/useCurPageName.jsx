import { useEffect, useState } from 'react'

export function useCurPageName(e) {
    let [curPageName, setCurPageName] = useState('Home')

    useEffect(() => {
        // setCurPageName = e?.target.innerText
        let curTargetEventTxt = e?.target.innerText
        setCurPageName(curTargetEventTxt)

        console.log(curPageName)
    }, [e, curPageName])

    return curPageName
}
