import { createContext, useContext, useState } from 'react'

const PanelsContext = createContext()

function PanelsProvider({ children }) {
    const [togglePanels, setTogglePanels] = useState({
        toggleLeft: true,
        toggleTerminal: false,
        togglePanelOptions: false,
        toggleRight: false,
    })

    function handleTogglePanels() {
        console.log('clicked')
        setTogglePanels((prev) => {
            return { ...prev, toggleLeft: !togglePanels.toggleLeft }
        })
    }
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

export { PanelsProvider, usePanels }
