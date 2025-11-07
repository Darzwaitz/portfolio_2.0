// settings-gear.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import SettingsGearIcon from '../assets/imgs/svg/components/SettingsGearIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'
import useDarkMode from '@/hooks/useDarkMode'

function SettingsGearButton() {
    // const { darkMode, setDarkMode, onSetDarkMode } = useDarkMode()
    const { darkMode, onSetDarkMode } = useDarkMode()
    // const { darkMode } = useDarkMode()
    // onSetDarkMode()
    // console.log(darkMode)

    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir

    // console.log('render: ' + darkMode)
    // localStorage.setItem('theme', 'light')

    const toggleLightMode = () => {
        // setDarkMode(!darkMode)
        console.log('onclick: ' + darkMode)
        onSetDarkMode()
        // console.log(darkMode)
    }

    return (
        <SvgIconwrapper
            onClick={toggleLightMode}
            iconSize={iconSize}
            hover={hover}
        >
            <div>
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
