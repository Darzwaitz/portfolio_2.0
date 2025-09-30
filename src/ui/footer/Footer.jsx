import RemoteButton from './buttons/RemoteButton'
import LinkedInButton from './buttons/LinkedInButton'
import GithubButton from '../buttons/GitHubButton'

function Footer() {
    return (
        <footer className="border-t-grey-04 bg-black-01 text-grey-01 flex w-full border-t">
            {/* <div>Footer section</div> */}
            <RemoteButton />
            <LinkedInButton />
            <GithubButton />
            {/* <span>Footer section</span> */}
            {/* <div>Footer section</div> */}
        </footer>
    )
}

export default Footer
