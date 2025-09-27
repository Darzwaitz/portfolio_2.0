// search.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import { usePanels } from '@/contexts/PanelsContext'

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import SearchIcon from '../assets/imgs/svg/components/SearchIcon'
import Tooltip from '@/features/tooltip/Tooltip'

function SearchButton() {
    const { togglePanels } = usePanels()
    let arrDir = togglePanels.tooltipArrDir
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <SearchIcon hover={hover} defaultColor={defaultColor} />
            <Tooltip
                msg={'Search Projects (Ctrl+Shift+F)'}
                arrowDirection={arrDir}
            />
        </SvgIconwrapper>
    )
}

export default SearchButton
