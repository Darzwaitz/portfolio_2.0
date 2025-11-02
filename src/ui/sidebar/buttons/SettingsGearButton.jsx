// settings-gear.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import SettingsGearIcon from '../assets/imgs/svg/components/SettingsGearIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

const toggleLightMode = () => document.documentElement.classList.toggle('light')

function SettingsGearButton() {
    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <div onClick={toggleLightMode}>
                <SettingsGearIcon hover={hover} defaultColor={defaultColor} />
                <Tooltip msg={'Colour Scheme'} arrowDirection={arrDir} />
            </div>
        </SvgIconwrapper>
    )
}

export default SettingsGearButton
