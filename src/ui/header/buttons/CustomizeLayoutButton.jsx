import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import CustomizeLayoutIcon from '../assets/imgs/svg/components/CustomizeLayoutIcon'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, arrowDirection, svgStylesMedium } =
    SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

// no off for this svg - just hover=already set

function CustomizeLayoutButton({ showTooltip, customStyles }) {
    return (
        <SvgIconwrapper
            iconSize={iconSize}
            // hover={hover}
            customStyles={customStyles}
        >
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
