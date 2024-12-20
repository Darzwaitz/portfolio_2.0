// import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, hover, iconSize, arrowDirection } = SvgSettingsMedium()

// import Tooltip from '@/features/tooltip/Tooltip'

// no off for this svg - just hover=already set

function AngularIcon() {
    return (
        <svg viewBox="0 0 32 32">
            <polygon
                points="16 2 16 2 16 2 2.966 6.648 4.954 23.882 16 30 16 30 16 30 27.046 23.882 29.034 6.648 16 2"
                fill="#dd0031"
            />
            <polygon
                points="16 2 16 5.108 16 5.094 16 19.276 16 19.276 16 30 16 30 27.046 23.882 29.034 6.648 16 2"
                fill="#c3002f"
            />
            <path
                d="M16,5.094,7.852,23.364H10.89l1.638-4.088h6.916l1.638,4.088H24.12L16,5.094Zm2.38,11.662H13.62L16,11.03Z"
                fill="#fff"
            />
        </svg>

        // <Tooltip
        //     msg={'Customize Layout...'}
        //     arrowDirection={arrowDirection}
        // />
        // </SvgIconwrapper>
    )
}

export default AngularIcon
