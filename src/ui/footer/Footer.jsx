import RemoteButton from './buttons/RemoteButton'
// GithubButton located in main ui folder
import GithubButton from '../buttons/GitHubButton'
import LinkedInButton from './buttons/LinkedInButton'

import SiteDetails from './SiteDetails'

function Footer() {
    return (
        <footer className="border-t-grey-04 bg-black-01 text-grey-01 flex w-full border-t">
            <RemoteButton />
            {/* GithubButton kept in main ui folder */}
            <GithubButton />
            <LinkedInButton />
            <SiteDetails />
        </footer>
    )
}

export default Footer
