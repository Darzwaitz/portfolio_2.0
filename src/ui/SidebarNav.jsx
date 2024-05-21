// svg comp. imports
import SvgWrapper from '../assets/imgs/svgs/SvgWrapper'
import UserAccount from '../assets/imgs/svgs/UserAccount'

function SidebarNav() {
    return (
        <aside className="flex flex-col items-center justify-between border-r-[1px] border-r-grey-04 bg-black-01 text-grey-01">
            {/* top nav links */}
            <div>
                <SvgWrapper size="large">
                    <UserAccount color="currentColor" />
                    <UserAccount color="currentColor" />
                    <UserAccount color="currentColor" />
                    <UserAccount color="currentColor" />
                </SvgWrapper>
            </div>
            {/* bottom nav links */}

            <SvgWrapper size="large">
                <UserAccount color="currentColor" />
                <UserAccount color="currentColor" />
            </SvgWrapper>
        </aside>
    )
}

export default SidebarNav
