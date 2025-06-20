import { createContext, useContext, useState } from 'react'

const CurPageContext = createContext()

function CurPageProvider({ children }) {
    // 1st item 'Search' is not displayed on landing - or ever
    const [curPageList, setCurPageList] = useState([
        ['Search', '🔎', '/'],
        ['Home', '🏚️', '/home'],
        ['About', '📃', '/about'],
        ['Portfolio', '📑', '/portfolio'],
        ['Contact', '📬', '/contact'],
    ])

    // \u00A0 === unicode for space
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

        // sets current active nav item in NavPages component
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
