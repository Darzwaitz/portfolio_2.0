// import PageHeading from '../PageHeading'
// import TagColor from '../../ui/codecolours/TagColor'
// import ProfileBlurb from '../../../private/ProfileBlurb'
import ProfileBlurb from '../../private/ProfileBlurb'
import TagColor from '../ui/codecolours/TagColor'
import PageHeading from './PageHeading'
// import AboutPage from './about/AboutPage'

const profileInfo = ProfileBlurb()

// function PageTemplate({ pageTitle }) {
function PageTemplate({ pageContent }) {
    return (
        <article className="flex w-fit flex-col">
            {/* <PageHeading title={pageTitle} /> */}
            <PageHeading title={'Test Page'} />
            <div>
                <TagColor.SpanBlue02 textValue={'test textV'}>
                    <h2>Test sectionn</h2>
                </TagColor.SpanBlue02>
                {pageContent}
                <h3>End Test section</h3>
            </div>
            <div className="font-code flex w-[90%]">
                <div className="cursor-default">
                    <h2 className="w-max">
                        <TagColor.SpanGrey01 textValue={'<'} />
                        <TagColor.SpanBlue02 textValue={'profile '} />
                        <TagColor.SpanBlue03 textValue={'name='} />
                        <TagColor.SpanBrown01 textValue={profileInfo.name} />
                        <TagColor.SpanGrey01 textValue={'>'} />
                    </h2>
                    {/* Profile img */}
                    <div className="border-grey-01 border-l pl-6">
                        <TagColor.SpanGrey01 textValue={'<'} />
                        <TagColor.SpanBlue02 textValue={'profile-img'} />
                        <TagColor.SpanGrey01 textValue={'>'} />
                        <div className="border-grey-01 border-l pt-1 pl-6">
                            <img
                                // src="/imgs/portfolio-image-1.png"
                                src="/imgs/portfolio_img-colour-1.png"
                                alt="profile-picture"
                                className="ml-1 h-23 w-23 cursor-zoom-in rounded border-3 saturate-50 hover:h-53 hover:w-53"
                            />
                        </div>
                        <TagColor.SpanGrey01 textValue={'<'} />
                        <TagColor.SpanBlue02 textValue={'/profile-img'} />
                        <TagColor.SpanGrey01 textValue={'>'} />
                    </div>
                    {/* / Profile img */}

                    {/* Description */}
                    <div className="border-l pl-6">
                        <h3>
                            <TagColor.SpanGrey01 textValue={'<'} />
                            <TagColor.SpanBlue02 textValue={'description'} />
                            <TagColor.SpanGrey01 textValue={'>'} />
                        </h3>
                        <TagColor.ParagraphBrown01>
                            {profileInfo.description}
                        </TagColor.ParagraphBrown01>

                        <TagColor.SpanGrey01 textValue={'<'} />
                        <TagColor.SpanBlue02 textValue={'/description'} />

                        <TagColor.SpanGrey01 textValue={'>'} />
                        <br />
                    </div>
                    {/* / Description */}

                    <TagColor.SpanGrey01 textValue={'<'} />
                    <TagColor.SpanBlue02 textValue={'/profile'} />
                    <TagColor.SpanGrey01 textValue={'>'} />
                </div>
            </div>
        </article>
    )
}

export default PageTemplate
