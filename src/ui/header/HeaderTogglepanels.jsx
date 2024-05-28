import { SvgSettingsMedium } from '../../assets/imgs/svg-components/SvgSettings'
const { defaultColor, hover, arrowDirection } = SvgSettingsMedium()

// TODO import ToggleSidebar svg comp

// import SvgIconwrapper from './SvgIconwrapper'
import Tooltip from '../tooltip/Tooltip'

function HeaderTogglepanels() {
    return (
        <div className="flex gap-2">
            <div className="">
                <svg
                    className={hover}
                    width="16"
                    height="16"
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
                <Tooltip msg={'About Page'} arrowDirection={arrowDirection} />
            </div>
            <div className="border-grey-07 rounded-md border p-1 text-grey-01">
                item
            </div>
            <div className="border-grey-07 rounded-md border p-1 text-grey-01">
                item
            </div>
            <div className="border-grey-07 rounded-md border p-1 text-grey-01">
                item
            </div>
        </div>
    )
}

export default HeaderTogglepanels
