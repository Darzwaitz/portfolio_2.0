import TagColor from '@/ui/codecolours/TagColor'

function ProfileDiv({ profileInfo, children }) {
    return (
        <>
            <h2 className="w-max">
                <TagColor.SpanGrey01 textValue={'<'} />
                <TagColor.SpanBlue02 textValue={'profile '} />
                <TagColor.SpanBlue03 textValue={'name='} />

                <TagColor.SpanBrown01 textValue={profileInfo} />
                <TagColor.SpanGrey01 textValue={'>'} />
            </h2>
            {children}
            <TagColor.SpanGrey01 textValue={'<'} />
            <TagColor.SpanBlue02 textValue={'/profile'} />
            <TagColor.SpanGrey01 textValue={'>'} />
        </>
    )
}

export default ProfileDiv
