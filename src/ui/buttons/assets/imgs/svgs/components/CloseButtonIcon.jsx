// import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, svgStylesMedium } =
//     SvgSettingsMedium()

// import Tooltip from '@/features/tooltip/Tooltip'

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
            {/* <Tooltip msg={'Minimize'} arrowDirection={'up'} /> */}
            {/* <pre className="tooltip before:solid after:solid after:top-top-0.5 before:border-b-grey-04b after:border-b-black-02 right-0 px-2.5 pt-2.5 pb-3.5 before:absolute before:top-0.5 before:right-1.5 before:mt-[-16px] before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-l-transparent before:text-current after:absolute after:right-1.5 after:mt-[-22px] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent after:text-current">
                <span className="text-grey-02b"> test</span>
            </pre> */}
        </span>
    )
}

export default CloseButtonIcon
