import { createContext, useContext, useState } from 'react'

const CurPageContext = createContext()

function CurPageProvider({ children }) {
    const [curPageName, setCurPageName] = useState([
        ['Home', '/', '🏚️'],
        ['About', '/about', '📃'],
        ['Portfolio', '/portfolio', '📑'],
        ['Contact', '/contact', '📬'],
    ])

    return (
        <CurPageContext.Provider value={{ curPageName, setCurPageName }}>
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
