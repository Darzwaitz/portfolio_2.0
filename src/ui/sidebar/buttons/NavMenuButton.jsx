// menu.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import NavMenuIcon from '../assets/imgs/svg/components/NavMenuIcon'

// function NavMenuButton({ onToggleExplorer }) {
function NavMenuButton() {
    return (
        <SvgIconwrapper id="sidebar-nav-menu" iconSize={iconSize} hover={hover}>
            <NavMenuIcon
                hover={hover}
                // onToggleExplorer={onToggleExplorer}
                defaultColor={defaultColor}
            />
            {/* No tooltip used on this one */}
        </SvgIconwrapper>
    )
}

export default NavMenuButton
