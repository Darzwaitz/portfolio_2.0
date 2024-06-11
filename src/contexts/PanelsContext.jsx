import { createContext, useContext, useState } from 'react'

const PanelsContext = createContext()

function PanelsProvider({ children }) {
    const [togglePanels, setTogglePanels] = useState({
        toggleLeft: true,
        toggleTerminal: false,
        toggleRight: false,
        toggleCustomizeLayout: false,
    })

    function onTogglePanels(dataset) {
        setTogglePanels((prev) => {
            switch (dataset) {
                case 'toggleLeft':
                    return {
                        ...prev,
                        toggleLeft: !prev.toggleLeft,
                        toggleRight: (prev.toggleRight = false),
                    }
                case 'toggleRight':
                    return {
                        ...prev,
                        toggleLeft: (prev.toggleLeft = false),
                        toggleRight: !prev.toggleRight,
                    }

                case 'toggleTerminal':
                    return {
                        ...prev,
                        toggleTerminal: !prev.toggleTerminal,
                    }
                case 'toggleCustomizeLayout':
                    console.log('toggleCustomizeLayout pressed')
                    return {
                        ...prev,
                        toggleCustomizeLayout: !prev.toggleCustomizeLayout,
                    }
                default:
                    return
            }
        })
    }

    return (
        <PanelsContext.Provider value={{ togglePanels, onTogglePanels }}>
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
