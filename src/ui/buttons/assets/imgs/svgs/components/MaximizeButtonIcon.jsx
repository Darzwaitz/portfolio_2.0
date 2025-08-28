// import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, svgStylesMedium } =
//     SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

function MaximizeButtonIcon() {
    /* chrome-maximize.svg */

    return (
        <span>
            <svg
                className="hover:bg-grey-08 h-6 p-1"
                // width="28"
                // height="28"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <path d="M3 3v10h10V3H3zm9 9H4V4h8v8z" />
            </svg>
            <Tooltip msg={'Maximize'} arrowDirection={'up'} />
        </span>
    )
}

export default MaximizeButtonIcon
