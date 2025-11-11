import { createContext, useContext, useState } from 'react'

const PanelsContext = createContext()

function PanelsProvider({ children }) {
    const [togglePanels, setTogglePanels] = useState({
        toggleLeft: true,
        toggleTerminal: false,
        toggleRight: false,
        tooltipArrDir: 'left',
        toggleSideBarNavMenu: false,
        toggleSearchBar: false,
        toggleCustomizeLayout: false,
    })

    function onTogglePanels(dataset) {
        console.log(togglePanels)

        setTogglePanels((prev) => {
            switch (dataset) {
                case 'toggleCustomizeLayout':
                    // console.log('toggleCustomizeLayout pressed')
                    return {
                        ...prev,
                        toggleSearchBar: false,
                        toggleCustomizeLayout: !prev.toggleCustomizeLayout,
                    }
                case 'toggleLeft':
                    return {
                        ...prev,
                        toggleLeft: !prev.toggleLeft,
                        toggleRight: (prev.toggleRight = false),
                        tooltipArrDir: 'left',
                    }
                case 'toggleRight':
                    return {
                        ...prev,
                        toggleLeft: (prev.toggleLeft = false),
                        toggleRight: !prev.toggleRight,
                        tooltipArrDir: 'right',
                    }

                case 'toggleTerminal':
                    return {
                        ...prev,
                        toggleTerminal: !prev.toggleTerminal,
                    }
                case 'toggleSearchBar':
                    if (togglePanels.toggleSideBarNavMenu === true) {
                        console.log('is true')

                        return {
                            ...prev,
                            toggleSideBarNavMenu: false,
                            toggleCustomizeLayout: false,
                            toggleSearchBar: false,
                            // toggleSearchBar: true,
                        }
                    }
                    if (togglePanels.toggleSideBarNavMenu === false)
                        console.log('this calld')

                    return {
                        ...prev,
                        toggleCustomizeLayout: false,
                        toggleSearchBar: !prev.toggleSearchBar,
                        // toggleSearchBar: false,
                    }

                default:
                    return
            }
        })
    }

    return (
        <PanelsContext.Provider
            value={{ togglePanels, setTogglePanels, onTogglePanels }}
        >
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
