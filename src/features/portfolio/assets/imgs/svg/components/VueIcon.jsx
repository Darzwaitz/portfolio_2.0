// import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, hover, iconSize, arrowDirection } = SvgSettingsMedium()

// import Tooltip from '@/features/tooltip/Tooltip'

// no off for this svg - just hover=already set

function VueIcon() {
    return (
        <svg>
            <path
                d="M24.4,3.925H30L16,28.075,2,3.925H12.71L16,9.525l3.22-5.6Z"
                fill="#41b883"
            />
            <path
                d="M2,3.925l14,24.15L30,3.925H24.4L16,18.415,7.53,3.925Z"
                fill="#41b883"
            />
            <path
                d="M7.53,3.925,16,18.485l8.4-14.56H19.22L16,9.525l-3.29-5.6Z"
                fill="#35495e"
            />
        </svg>

        // <Tooltip
        //     msg={'Customize Layout...'}
        //     arrowDirection={arrowDirection}
        // />
        // </SvgIconwrapper>
    )
}

export default VueIcon
