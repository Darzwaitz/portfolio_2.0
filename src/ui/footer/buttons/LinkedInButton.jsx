import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import LinkedInIcon from '../assets/imgs/svg/components/LinkedInIcon'

import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, hover } = SvgSettingsMedium()

function LinkedInButton() {
    const linkedinButtonStyles =
        'h-full w-full text-grey-02 hover:text-grey-06b pt-[0.2rem]'
    return (
        // <span className="mx-2 my-0.5 w-4">
        <SvgIconwrapper
            iconSize={iconSize}
            hover={hover}
            customStyles={linkedinButtonStyles}
        >
            <LinkedInIcon defaultColor={defaultColor} />
        </SvgIconwrapper>
    )
}

export default LinkedInButton
