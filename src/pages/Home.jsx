import PageBlurbs from '../../private/PageBlurbs'
import DescriptionDiv from './page-components/DescriptionDiv'
import PageTemplate from './PageTemplate'

const profileInfo = PageBlurbs()

function Home() {
    return (
        <PageTemplate pageTitle={'Home Page'}>
            <DescriptionDiv
                id={'test description'}
                textContent={profileInfo.homeDescription}
                // htmlTags={'h2OpenTagOnly'}
                htmlTags={['h3', 'p']}
            />
        </PageTemplate>
    )
}

export default Home
