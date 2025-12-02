import RemoteButton from './buttons/RemoteButton'
// GithubButton located in main ui folder
import GithubButton from '../buttons/GitHubButton'
import LinkedInButton from './buttons/LinkedInButton'

import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { defaultColor, iconSize, hover } = SvgSettingsMedium()

import SiteDetails from './SiteDetails'
const link = 'https://github.com/Darzwaitz'
function Footer() {
    return (
        <footer className="border-t-grey-04 bg-black-01 text-grey-01 flex w-full border-t">
            <div className="flex items-center gap-1.5">
                <RemoteButton />
                {/* GithubButton kept in main ui folder */}
                <GithubButton
                    link={link}
                    iconSize={iconSize}
                    hover={hover}
                    defaultColor={defaultColor}
                    tooltipMsg="Github Profile"
                />
                <LinkedInButton />
            </div>
            <SiteDetails />
        </footer>
    )
}

export default Footer
