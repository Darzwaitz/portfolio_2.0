import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import LinkedInIcon from '../assets/imgs/svg/components/LinkedInIcon'

import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, hover } = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { Link } from 'react-router'

function LinkedInButton() {
    const linkedinButtonStyles =
        'h-full w-full text-grey-01 hover:text-grey-02 pl-3 pt-[0.2rem]'
    return (
        // <span className="mx-2 my-0.5 w-4">
        <Link to="#">
            <SvgIconwrapper
                iconSize={iconSize}
                hover={hover}
                customStyles={linkedinButtonStyles}
            >
                <Tooltip msg={'LinkedIn Profile'} arrowDirection={'down'} />
                <LinkedInIcon defaultColor={defaultColor} />
            </SvgIconwrapper>
        </Link>
    )
}

export default LinkedInButton
