import { createContext, useContext, useState } from 'react'

const PanelsContext = createContext()

function PanelsProvider({ children }) {
    const [togglePanels, setTogglePanels] = useState({
        toggleLeft: true,
        toggleTerminal: false,
        togglePanelOptions: false,
        toggleRight: false,
    })

    function handleTogglePanels(e) {
        setTogglePanels((prev) => {
            return { ...prev, [e]: !prev[e] }
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

// eslint-disable-next-line react-refresh/only-export-components
export { PanelsProvider, usePanels }
