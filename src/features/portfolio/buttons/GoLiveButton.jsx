import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'

import GoLiveIcon from '../assets/imgs/svg/components/GoLiveIcon'

import Tooltip from '@/features/tooltip/Tooltip'
import { Link } from 'react-router'

function GoLiveButton({
    iconSize,
    hover,
    link,
    tooltipMsg,
    defaultColor,
    iconHeight,
}) {
    let customStyles =
        'hover:bg-grey-04b hover:text-grey-02 w-fit p-1 mx-1 relative'
    let arrowDirection = 'down'
    let tooltipStyles = '-left-[0.8rem]'

    return (
        <Link to={link}>
            <SvgIconwrapper
                iconSize={iconSize}
                hover={hover}
                customStyles={customStyles}
            >
                <Tooltip
                    msg={tooltipMsg}
                    tooltipStyles={tooltipStyles}
                    arrowDirection={arrowDirection}
                />
                <GoLiveIcon
                    defaultColor={defaultColor}
                    iconHeight={iconHeight}
                />
            </SvgIconwrapper>
        </Link>
    )
}

export default GoLiveButton
