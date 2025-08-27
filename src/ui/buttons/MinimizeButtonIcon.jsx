// import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, svgStylesMedium } =
//     SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

function MinimizeButtonIcon() {
    /* chrome-minimize.svg */

    return (
        <span>
            <svg
                className="hover:bg-grey-08 h-6 p-1"
                // width="16"
                // height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <path d="M14 8v1H3V8h11z" />
                <script xmlns="" />
            </svg>
            <Tooltip msg={'Minimize'} arrowDirection={'up'} />
        </span>
    )
}

export default MinimizeButtonIcon
