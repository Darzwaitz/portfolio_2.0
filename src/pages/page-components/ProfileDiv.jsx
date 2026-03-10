import TagBrackets from './TagBrackets'
// import TagColor from '@/ui/codecolours/TagColorContext'
import ProfileImg from './ProfileImg'
import DescriptionDiv from './DescriptionDiv'
import ProfileBlurb from '../../../private/PageBlurbs'

const profileInfo = ProfileBlurb()

// function ProfileDiv({ profileInfo, children }) {
// function ProfileDiv({ children }) {
function ProfileDiv() {
    return (
        <>
            <TagBrackets
                htmlTags={['h2', 'openTagOnly']}
                tagValue={'profilezz'}
                // textContent={
                //     <ProfileImg src={'/imgs/portfolio_img-colour-1.png'} />
                // }
                textContent={
                    <ProfileImg src={'/imgs/portfolio_img-colour-1.png'} />
                }
            >
                {/* <TagColor.SpanBlue03 textValue={'name='} /> */}
                {/* <TagColor.SpanBrown01 textValue={profileInfo} /> */}
                {/* {children} */}
                <DescriptionDiv
                    id={'profile description'}
                    htmlTags={['h3', 'p']}
                    border={true}
                    textContent={profileInfo.aboutDescription}
                />
            </TagBrackets>
        </>
    )
}

export default ProfileDiv

// import TagColor from '@/ui/codecolours/TagColorContext'

// function ProfileDiv({ profileInfo, children }) {
//     return (
//         <>
//             <h2 className="w-max">
//                 <TagColor.SpanGrey01 textValue={'<'} />
//                 <TagColor.SpanBlue02 textValue={'profile '} />
//                 <TagColor.SpanBlue03 textValue={'name='} />

//                 <TagColor.SpanBrown01 textValue={profileInfo} />
//                 <TagColor.SpanGrey01 textValue={'>'} />
//             </h2>
//             {children}
//             <TagColor.SpanGrey01 textValue={'<'} />
//             <TagColor.SpanBlue02 textValue={'/profile'} />
//             <TagColor.SpanGrey01 textValue={'>'} />
//         </>
//     )
// }

// export default ProfileDiv
