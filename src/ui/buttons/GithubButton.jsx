import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import GithubIcon from './assets/imgs/svgs/components/GithubIcon'

import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, hover } = SvgSettingsMedium()

function GithubButton() {
    const githubButtonStyles =
        'px-2 pt-[0.2rem] h-full w-full text-grey-02 hover:text-grey-06b'
    return (
        <SvgIconwrapper
            iconSize={iconSize}
            hover={hover}
            customStyles={githubButtonStyles}
        >
            <GithubIcon defaultColor={defaultColor} />
        </SvgIconwrapper>
    )
}

export default GithubButton
