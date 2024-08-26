import { useState } from 'react'

export function useCurPageName(e) {
    let [curPageName, setCurPageName] = useState('Home')

    // setCurPageName = e?.target.innerText
    let curTargetEventTxt = e?.target.innerText
    setCurPageName(curTargetEventTxt)

    console.log(curPageName)

    return curPageName
}
