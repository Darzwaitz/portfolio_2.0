import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// arrowDirectionWithFix used because of tooltip x axis overflow
const { defaultColor, hover, iconSize, arrowDirectionWithFix } =
    SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

// no off for this svg - just hover=already set

function NavRightArrow() {
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            {/* arrow-right.svg */}
            <svg
                className="pointer-events-none"
                width="22"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={defaultColor}
            >
                <path d="M9 13.887l5-5V8.18l-5-5-.707.707 4.146 4.147H2v1h10.44L8.292 13.18l.707.707z" />
            </svg>

            <Tooltip
                msg={'Go Forward (Alt+RightArrow)'}
                arrowDirectionWithFix={arrowDirectionWithFix}
            />
        </SvgIconwrapper>
    )
}

export default NavRightArrow
