import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import CustomizeLayoutIcon from '../assets/imgs/svg/components/CustomizeLayoutIcon'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, hover, iconSize, arrowDirection, svgStylesMedium } =
    SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

// no off for this svg - just hover=already set

function CustomizeLayoutButton({ showTooltip }) {
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            {/* layout.svg */}
            <CustomizeLayoutIcon
                iconSize={iconSize}
                svgStylesMedium={svgStylesMedium}
                defaultColor={defaultColor}
            />
            {showTooltip && (
                <Tooltip
                    msg={'Customize Layout...'}
                    arrowDirection={arrowDirection}
                />
            )}
        </SvgIconwrapper>
    )
}

export default CustomizeLayoutButton
