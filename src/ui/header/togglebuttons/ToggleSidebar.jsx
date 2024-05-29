import SvgIconwrapper from '../../../assets/imgs/svg/components/SvgIconwrapper'
// import Tooltip from '../tooltip/Tooltip'

import { SvgSettingsMedium } from '../../../assets/imgs/svg/components/SvgSettings'
// const { defaultColor, hover, arrowDirection } = SvgSettingsMedium()
const { defaultColor, hover } = SvgSettingsMedium()

function ToggleSidebar() {
    return (
        <SvgIconwrapper>
            <svg
                className={hover}
                width="24"
                height="34"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill={defaultColor}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM14 14H7V2H14V14Z"
                />
            </svg>

            {/* <Tooltip
                msg={'Toggle Primary Sidebar (Ctrl+B)'}
                arrowDirection={arrowDirection}
            /> */}
        </SvgIconwrapper>
    )
}

export default ToggleSidebar
