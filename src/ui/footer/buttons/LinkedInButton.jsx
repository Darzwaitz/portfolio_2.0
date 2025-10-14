import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import LinkedInIcon from '../assets/imgs/svg/components/LinkedInIcon'

import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, hover } = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { Link } from 'react-router'

function LinkedInButton() {
    const linkedinButtonStyles =
        'h-full hover:bg-grey-04b px-1.5 w-full text-grey-01 hover:text-grey-02'
    return (
        <SvgIconwrapper
            iconSize={iconSize}
            hover={hover}
            customStyles={linkedinButtonStyles}
        >
            <Link to="#">
                <Tooltip msg={'LinkedIn Profile'} arrowDirection={'down'} />
                <LinkedInIcon defaultColor={defaultColor} />
            </Link>
        </SvgIconwrapper>
    )
}

export default LinkedInButton
