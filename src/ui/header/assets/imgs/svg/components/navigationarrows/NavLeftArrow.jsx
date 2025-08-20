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

// no off for this svg - just hover=already set

function NavLeftArrow() {
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            {/* arrow-left.svg */}
            <svg
                className={`pointer-events-none ${iconSize === 'medium' && svgStylesMedium}`}
                // width="22"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={defaultColor}
            >
                <path d="M7 3.093l-5 5V8.8l5 5 .707-.707-4.146-4.147H14v-1H3.56L7.708 3.8 7 3.093z" />
            </svg>

            <Tooltip
                msg={'Go Back (Alt+LeftArrow)'}
                arrowDirectionWithFix={arrowDirectionWithFix}
            />
        </SvgIconwrapper>
    )
}

export default NavLeftArrow
