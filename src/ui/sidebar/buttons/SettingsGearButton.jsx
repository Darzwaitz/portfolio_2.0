// settings-gear.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import SettingsGearIcon from '../assets/imgs/svg/components/SettingsGearIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'
import { useState } from 'react'

// let theme = localStorage.getItem('theme')
console.log(localStorage.getItem('theme'))

function SettingsGearButton() {
    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir

    // let [darkMode, setDarkMode] = useState(true)
    let [darkMode, setDarkMode] = useState(true)

    const toggleLightMode = () => {
        document.documentElement.classList.toggle('light')

        localStorage.setItem('theme', false)
        // if (localStorage.getItem('light')) {
        //     localStorage.setItem('colorMode', 'dark')
        // } else {
        //     localStorage.setItem('colorMode', 'light')
        // }

        console.log(localStorage.getItem('theme'))

        setDarkMode(!darkMode)
    }

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <div onClick={toggleLightMode}>
                <SettingsGearIcon hover={hover} defaultColor={defaultColor} />
                <Tooltip
                    msg={darkMode ? 'Light Mode' : 'Dark Mode'}
                    arrowDirection={arrDir}
                />
            </div>
        </SvgIconwrapper>
    )
}

export default SettingsGearButton
