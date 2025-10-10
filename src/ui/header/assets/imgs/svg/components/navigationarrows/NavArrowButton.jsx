import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// arrowDirectionWithFix used because of tooltip x axis overflow
const {
    defaultColor,
    hover,
    iconSize,
    arrowDirectionWithFix,
    svgStylesMedium,
} = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

function NavArrowButton({ arrowDirection, tooltipMsg }) {
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            <svg
                className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={defaultColor}
            >
                <path d={arrowDirection} />
            </svg>

            <Tooltip
                msg={tooltipMsg}
                arrowDirectionWithFix={arrowDirectionWithFix}
            />
        </SvgIconwrapper>
    )
}

export default NavArrowButton
