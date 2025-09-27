// settings-gear.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import SettingsGearIcon from '../assets/imgs/svg/components/SettingsGearIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'

function SettingsGearButton() {
    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <SettingsGearIcon hover={hover} defaultColor={defaultColor} />
            <Tooltip msg={'Colour Scheme'} arrowDirection={arrDir} />
        </SvgIconwrapper>
    )
}

export default SettingsGearButton
