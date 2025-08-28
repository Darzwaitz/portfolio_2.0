// import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, svgStylesMedium } =
//     SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

function CloseButtonIcon() {
    /* chrome-close.svg */

    return (
        <span>
            <svg
                className="hover:bg-grey-08 h-6 p-1"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <path d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z" />
                <script xmlns="" />
            </svg>
            <Tooltip msg={'Minimize'} arrowDirection={'up'} />
        </span>
    )
}

export default CloseButtonIcon
