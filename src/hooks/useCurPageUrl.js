import { useEffect } from 'react'
import { useCurPage } from '../contexts/CurPageContext'
import { useLocation } from 'react-router-dom'

export function useCurPageUrl() {
    const { handleCurPageName } = useCurPage()
    let curLocation = useLocation().pathname

    useEffect(() => {
        function upperCasePathName() {
            const pathname = curLocation.slice(1, curLocation.length + 1)
            const upperCasePathName =
                pathname.charAt(0).toUpperCase() + pathname.slice(1)
            return upperCasePathName
        }

        if (curLocation !== '/') return handleCurPageName(upperCasePathName())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
