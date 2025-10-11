import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import GithubIcon from './assets/imgs/svgs/components/GithubIcon'

import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, hover } = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { Link } from 'react-router'

function GithubButton() {
    const githubButtonStyles =
        'pl-3 pt-[0.2rem] h-full w-full text-grey-02 hover:text-grey-06b'

    return (
        <Link to="#">
            <SvgIconwrapper
                iconSize={iconSize}
                hover={hover}
                customStyles={githubButtonStyles}
            >
                <Tooltip msg={'Github Profile'} arrowDirection={'down'} />
                <GithubIcon defaultColor={defaultColor} />
            </SvgIconwrapper>
        </Link>
    )
}

export default GithubButton
