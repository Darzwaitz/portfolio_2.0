import { createContext, useContext, useState } from 'react'
// import { useCurPageUrl } from '../hooks/useCurPageUrl'
// import { useLocation } from 'react-router-dom'

const CurPageContext = createContext()

function CurPageProvider({ children }) {
    const [curPageList, setCurPageList] = useState([
        ['Home', '🏚️', '/'],
        ['About', '📃', '/about'],
        ['Portfolio', '📑', '/portfolio'],
        ['Contact', '📬', '/contact'],
    ])
    // let location = useLocation()
    // function useCheckCurUrl() {
    //     useCurPageUrl()
    // }
    // useCheckCurUrl()

    // const onShowTemp = useCurPageUrl()

    const [curPageName, setCurPageName] = useState(
        `${curPageList[0].slice(1, 2)} \u00A0${curPageList[0].slice(0, 1)}`
    )

    function onCurPageName(curPName) {
        let currentPage

        function checkList() {
            for (let i = 0; i < curPageList.length; i++) {
                const item = curPageList[i]
                if (item.includes(curPName))
                    currentPage = `${item.slice(1, 2)} \u00A0${item.slice(0, 1)}`
            }
        }
        checkList()

        setCurPageName(currentPage)

        return setCurPageName
    }

    return (
        <CurPageContext.Provider
            value={{
                curPageList,
                setCurPageList,
                curPageName,
                onCurPageName,
                // onShowTemp,
            }}
        >
            {children}
        </CurPageContext.Provider>
    )
}

function useCurPage() {
    const context = useContext(CurPageContext)
    if (!context === undefined)
        throw new Error(
            'CurPageContext is being used outside of CurPageProvider'
        )
    return context
}

export { CurPageProvider, useCurPage }
