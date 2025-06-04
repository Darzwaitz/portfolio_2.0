// menu.svg
import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'

// import { usePanels } from '@/contexts/PanelsContext'

function NavMenuIcon({ onToggleExplorer }) {
    // const { togglePanels } = usePanels()

    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <svg
                className={`${hover} relative`}
                onClick={onToggleExplorer}
                width="90%"
                height=""
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                // fill={props.color}
                fill={defaultColor}
            >
                <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z" />
            </svg>
            {/* No tooltip used on this one */}
        </SvgIconwrapper>
    )
}

export default NavMenuIcon
