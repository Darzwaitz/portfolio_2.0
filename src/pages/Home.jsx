import PageBlurbs from '../../private/PageBlurbs'
import DescriptionDiv from './page-components/DescriptionDiv'
import PageTemplate from './PageTemplate'

const profileInfo = PageBlurbs()

function Home() {
    return (
        <PageTemplate pageTitle={'Home Page'}>
            <DescriptionDiv>{profileInfo.homeDescription}</DescriptionDiv>
        </PageTemplate>
    )
}

export default Home
