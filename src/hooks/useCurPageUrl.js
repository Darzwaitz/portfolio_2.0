import { useEffect } from 'react'
import { useCurPage } from '../contexts/CurPageContext'
// import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { useEffect, useState } from 'react'

// in here,
// get location
//  if location !== '/'
//  from import onCurPageName(curPName)
//  -----curPName should be
//  function UppercasePathName() {
// const pathname = location.pathname.slice(1, location.pathname.length + 1);
// const upperCasePathName = pathname.charAt(0) + pathname.slice(1)
//  }
//             )

export function useCurPageUrl() {
    // onCurPageName(curPName)
    const { onCurPageName } = useCurPage()

    let curLocation = useLocation().pathname

    function upperCasePathName() {
        const pathname = curLocation.slice(1, curLocation.length + 1)
        const upperCasePathName = pathname.charAt(0) + pathname.slice(1)
        return upperCasePathName
    }
    useEffect(() => {
        if (curLocation !== '/') upperCasePathName()

        // const [temp] = useState('first')

        // setTemp('second')
        // console.log(temp)
    }, [curLocation, upperCasePathName])

    return onCurPageName(upperCasePathName)
}
