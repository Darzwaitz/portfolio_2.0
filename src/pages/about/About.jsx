import ProfileBlurb from '../../../private/PageBlurbs'
import DescriptionDiv from '../page-components/DescriptionDiv'
import PageTemplate from '../PageTemplate'
import ProfileDiv from '../page-components/ProfileDiv'
import ProfileImg from '../page-components/ProfileImg'

// import useUrlChange from '../../hooks/useUrlChange'

const profileInfo = ProfileBlurb()

function About() {
    // useUrlChange()

    return (
        <PageTemplate pageTitle={'About Page'} id={'profile'}>
            <ProfileDiv profileInfo={profileInfo.name}>
                <ProfileImg src={'/imgs/portfolio_img-colour-1.png'} />
                <DescriptionDiv border={true}>
                    {profileInfo.aboutDescription}
                </DescriptionDiv>
            </ProfileDiv>
        </PageTemplate>
    )
}

export default About
