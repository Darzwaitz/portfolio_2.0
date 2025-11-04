// settings-gear.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import SettingsGearIcon from '../assets/imgs/svg/components/SettingsGearIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'
import useDarkMode from '../../../hooks/useDarkMode'

// let theme = localStorage.getItem('theme')
// console.log(localStorage.getItem('theme'))

function SettingsGearButton() {
    const { darkMode, onSetDarkMode } = useDarkMode()
    // onSetDarkMode()
    // console.log(darkMode)

    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir

    // let [darkMode, setDarkMode] = useState(true)
    // console.log(darkMode)

    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('light')
        // onSetDarkMode()
    }
    // }
    // localStorage.clear()

    const toggleLightMode = () => {
        onSetDarkMode()

        console.log(darkMode)

        // if (darkMode === true) {
        //     document.documentElement.classList.add('light')
        //     localStorage.setItem('theme', 'light')
        //     onSetDarkMode()
        // }
        // if (darkMode === false) {
        //     document.documentElement.classList.remove('light')
        //     localStorage.clear()
        //     onSetDarkMode()
        // }
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
