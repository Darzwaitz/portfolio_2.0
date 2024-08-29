import { createContext, useContext, useState } from 'react'
// import { useCurPageName } from '../hooks/useCurPageName'
const CurPageContext = createContext()

function CurPageProvider({ children }) {
    const [curPageList, setCurPageList] = useState([
        ['Home', '/', '🏚️'],
        ['About', '/about', '📃'],
        ['Portfolio', '/portfolio', '📑'],
        ['Contact', '/contact', '📬'],
    ])
    // const onPageNameChange = useCurPageName()
    // console.log(onPageNameChange)
    // const { curPageName, setCurPageName } = useCurPageName()
    // setCurPageName('from context')
    // console.log(curPageName)

    // create custom hook
    // let [curPageName, setCurPageName] = useState('Home')
    // function handleSetCurPageName(e) {
    //     // setCurPageName = e?.target.innerText
    //     setCurPageName = e?.target.innerText
    //     console.log(setCurPageName)

    //     return curPageName
    // }

    // const [curPageName, setCurPageName] = useState('initial')
    const [curPageName] = useState('initial')

    function onCurPageName(curPageList) {
        // let [curPageName] = useState('Homey')

        // useEffect(() => {
        // setCurPageName(event?.target.innerText)
        // setCurPageName('testyy')
        // }, [curPageName, setCurPageName])

        // console.log(curPageName)

        // return curPageName
        return { curPageList }
    }

    return (
        <CurPageContext.Provider
            value={{
                curPageList,
                setCurPageList,
                // onPageNameChange,
                curPageName,
                // setCurPageName,
                onCurPageName,
                // handleSetCurPageName,
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
