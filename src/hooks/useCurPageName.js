// import { useEffect, useState } from 'react'
import { useState } from 'react'

export function useCurPageName() {
    // let [curPageName] = useState('Home')
    const [curPageName, setCurPageName] = useState('initial')

    // useEffect(() => {
    // setCurPageName(event?.target.innerText)
    setCurPageName('testyy')
    // }, [curPageName, setCurPageName])

    // console.log(curPageName)

    return { curPageName }
}
