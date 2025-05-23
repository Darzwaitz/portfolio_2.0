// import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, hover, iconSize, arrowDirection } = SvgSettingsMedium()

// import Tooltip from '@/features/tooltip/Tooltip'

// no off for this svg - just hover=already set

function AllFolderIcon() {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            // fill={props.color}
            // fill={defaultColor}
        >
            <path
                d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z"
                fill="#14622a"
            />
            <path
                d="M19.146,30.989a.9.9,0,0,1-.207-.025,1.041,1.041,0,0,1-.726-1.213L20.922,15.32a1.037,1.037,0,0,1,.444-.683.894.894,0,0,1,.7-.122,1.043,1.043,0,0,1,.727,1.213L20.077,30.16a1.033,1.033,0,0,1-.442.681A.9.9,0,0,1,19.146,30.989Z"
                fill="#06cc14"
            />
            <path
                d="M24.578,28.944l-.068,0a.931.931,0,0,1-.668-.377,1.1,1.1,0,0,1,.1-1.419L28.6,22.595l-4.638-4.239a1.1,1.1,0,0,1-.141-1.416.937.937,0,0,1,.661-.4.9.9,0,0,1,.709.237l5.47,5a1.1,1.1,0,0,1,.144,1.416,1.061,1.061,0,0,1-.142.163L25.216,28.68A.916.916,0,0,1,24.578,28.944Z"
                fill="#06cc14"
            />
            <path
                d="M16.423,28.947a.914.914,0,0,1-.639-.267l-5.452-5.327A.9.9,0,0,1,10.2,23.2a1.094,1.094,0,0,1,.141-1.414l5.471-5a.881.881,0,0,1,.7-.238.941.941,0,0,1,.665.4,1.1,1.1,0,0,1-.14,1.417L12.4,22.6l4.659,4.551a1.093,1.093,0,0,1,.1,1.419.927.927,0,0,1-.669.377Z"
                fill="#06cc14"
            />
        </svg>

        // <Tooltip
        //     msg={'Customize Layout...'}
        //     arrowDirection={arrowDirection}
        // />
        // </SvgIconwrapper>
    )
}

export default AllFolderIcon
