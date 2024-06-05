import { createContext, useContext, useState } from 'react'

const PanelsContext = createContext()

function PanelsProvider({ children }) {
    const [togglePanels, setTogglePanels] = useState({
        // const [togglePanels] = useState({
        toggleLeft: true,
        toggleTerminal: false,
        togglePanelOptions: false,
        toggleRight: false,
    })

    // console.log(setTogglePanels)

    function handleTogglePanels() {
        console.log('setTogglePanels RUN')
        setTogglePanels((prev) => {
            console.log(prev)
            return { ...prev, toggleLeft: !prev.toggleLeft }
            // return prev
        })
    }

    // function testF() {
    //     console.log('test RUN')
    // }
    return (
        <PanelsContext.Provider value={{ togglePanels, handleTogglePanels }}>
            {children}
        </PanelsContext.Provider>
    )
}

function usePanels() {
    const context = useContext(PanelsContext)
    if (!context === undefined)
        throw new Error(
            'PanelsContext is being used outside of the PanelsProvider'
        )
    return context
}
// console.log(usePanels)

// eslint-disable-next-line react-refresh/only-export-components
export { PanelsProvider, usePanels }
