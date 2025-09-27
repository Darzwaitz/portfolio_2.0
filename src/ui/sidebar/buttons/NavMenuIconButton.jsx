// menu.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import NavMenuIconIcon from '../assets/imgs/svg/components/NavMenuIconIcon'

// import { usePanels } from '@/contexts/PanelsContext'

function NavMenuIconButton({ onToggleExplorer }) {
    // const { togglePanels } = usePanels()

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <NavMenuIconIcon
                hover={hover}
                onToggleExplorer={onToggleExplorer}
                defaultColor={defaultColor}
            />
            {/* No tooltip used on this one */}
        </SvgIconwrapper>
    )
}

export default NavMenuIconButton
