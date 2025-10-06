import RemoteButton from './buttons/RemoteButton'
import GithubButton from '../buttons/GitHubButton'
import LinkedInButton from './buttons/LinkedInButton'

function Footer() {
    return (
        <footer className="border-t-grey-04 bg-black-01 text-grey-01 flex w-full border-t">
            <RemoteButton />
            <LinkedInButton />
            <GithubButton />
        </footer>
    )
}

export default Footer
