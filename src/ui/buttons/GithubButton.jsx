import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import GithubIcon from './assets/imgs/svgs/components/GithubIcon'

// import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
// const { defaultColor, iconSize, hover } = SvgSettingsMedium()

import Tooltip from '@/features/tooltip/Tooltip'

import { Link } from 'react-router'

function GithubButton({
    githubProjectLink,
    iconSize,
    iconHeight,
    hover,
    defaultColor,
    tooltipMsg,
    footerStyles,
    portfolioItemStyles,
}) {
    let customStyles = ''
    let arrowDirection = ''
    let tooltipStyles = ''

    if (footerStyles) {
        customStyles =
            'hover:bg-grey-04b px-1.5 h-full text-grey-01 hover:text-grey-02'
        tooltipStyles = '-left-[0.3em]'
        iconHeight = 'h-5'
        arrowDirection = 'down'
    }
    if (portfolioItemStyles) {
        customStyles = 'hover:bg-grey-04b hover:text-grey-02 w-fit p-1 mx-1'
        iconHeight = 'h-4'
        arrowDirection = 'down-social-icon'
    }

    return (
        <Link className="h-full" to={githubProjectLink}>
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
                <GithubIcon
                    defaultColor={defaultColor}
                    iconHeight={iconHeight}
                />
            </SvgIconwrapper>
        </Link>
    )
}

export default GithubButton
