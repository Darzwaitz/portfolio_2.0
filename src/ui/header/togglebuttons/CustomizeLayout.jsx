import SvgIconwrapper from '../../../assets/imgs/svg/components/SvgIconwrapper'
// import Tooltip from '../tooltip/Tooltip'

// TODO tooltips set in all

import { SvgSettingsMedium } from '../../../assets/imgs/svg/components/SvgSettings'
// const { defaultColor, hover, arrowDirection } = SvgSettingsMedium()
const { defaultColor, hover, iconSize } = SvgSettingsMedium()

// no off for this svg - just hover=already set

function CustomizeLayout() {
    return (
        <SvgIconwrapper iconSize={iconSize} hover={hover}>
            {/* layout.svg */}
            <svg
                width="22"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={defaultColor}
            >
                <path d="M3 2L2 3V13L3 14H7L8 13V3L7 2H3ZM3 13V3H7V13H3Z" />
                <path d="M10 3L11 2H14L15 3V6L14 7H11L10 6V3ZM11 3V6H14V3H11Z" />
                <path d="M10 10L11 9H14L15 10V13L14 14H11L10 13V10ZM11 10V13H14V10H11Z" />
            </svg>

            {/* <Tooltip
                msg={'Toggle Primary Sidebar (Ctrl+B)'}
                arrowDirection={arrowDirection}
            /> */}
        </SvgIconwrapper>
    )
}

export default CustomizeLayout
