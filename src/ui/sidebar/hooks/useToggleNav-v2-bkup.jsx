import { useState } from 'react'
import { usePanels } from '@/contexts/PanelsContext'

export default function useToggleNav() {
    // const { togglePanels, setTogglePanels } = usePanels()
    const { setTogglePanels } = usePanels()
    // const { togglePanels } = usePanels()

    const [toggleNav, setToggleNav] = useState(false)

    const onHandleToggleNav = () => {
        if (toggleNav === true) {
            console.log('itz true')

            setTogglePanels((prev) => {
                return {
                    ...prev,
                    toggleSideBarNavMenu: true,
                    toggleSearchBar: false,
                    toggleCustomizeLayout: false,
                }
            })
            // setToggleNav(false)
            setToggleNav((show) => !show)
        }
        if (toggleNav === false) console.log('here')
        setTogglePanels((prev) => {
            return {
                ...prev,
                // toggleSideBarNavMenu: true,
                toggleSearchBar: false,
                toggleCustomizeLayout: false,
            }
        })
        setToggleNav((show) => !show)
    }

    return { toggleNav, onHandleToggleNav }
}
