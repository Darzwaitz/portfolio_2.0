import TagColor from '@/ui/codecolours/TagColor'

function ProfileImg({ src }) {
    return (
        <div className="border-grey-01 border-l pl-6">
            <TagColor.SpanGrey01 textValue={'<'} />
            <TagColor.SpanBlue02 textValue={'profile-img'} />
            <TagColor.SpanGrey01 textValue={'>'} />
            <div className="border-grey-01 border-l pt-1 pl-6">
                <img
                    src={src}
                    alt="profile-picture"
                    className="ml-1 h-23 w-23 cursor-zoom-in rounded border-3 saturate-50 hover:h-53 hover:w-53"
                />
            </div>
            <TagColor.SpanGrey01 textValue={'<'} />
            <TagColor.SpanBlue02 textValue={'/profile-img'} />
            <TagColor.SpanGrey01 textValue={'>'} />
        </div>
    )
}

export default ProfileImg
