import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import GithubIcon from './assets/imgs/svgs/components/GithubIcon'

// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, iconSize, hover } = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { Link } from 'react-router'

function GithubButton({
    link,
    iconSize,
    iconHeight,
    hover,
    defaultColor,
    tooltipMsg,
    footerStyles,
    portfolioItemStyles,
}) {
    // const githubButtonStyles =
    //     'pl-3 pt-[0.2rem] hover:bg-grey-04b h-full w-full text-grey-01 hover:text-grey-02'
    let customStyles = ''

    if (footerStyles) {
        customStyles =
            'hover:bg-grey-04b px-1.5 h-full text-grey-01 hover:text-grey-02'
        iconHeight = 'h-5'
    }
    if (portfolioItemStyles) {
        customStyles = 'hover:bg-grey-04b w-fit'
        iconHeight = 'h-3.5'
    }
    // const githubButtonStyles =
    // 'hover:bg-grey-04b px-1.5 h-full w-full text-grey-01 hover:text-grey-02'
    // 'hover:bg-red-01 px-1.5 h-full w-full text-grey-01 hover:text-grey-02'

    return (
        <SvgIconwrapper
            iconSize={iconSize}
            hover={hover}
            customStyles={customStyles}
        >
            <Link to={link}>
                <Tooltip msg={tooltipMsg} arrowDirection={'down'} />
                <GithubIcon
                    defaultColor={defaultColor}
                    iconHeight={iconHeight}
                />
            </Link>
        </SvgIconwrapper>
    )
}

export default GithubButton
