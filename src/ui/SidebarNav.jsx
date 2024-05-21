// svg comp. imports
import SvgWrapper from '../assets/imgs/svgs/SvgWrapper'
import UserAccount from '../assets/imgs/svgs/UserAccount'

function SidebarNav() {
    return (
        <aside className="flex flex-col items-center justify-between border-r-[1px] border-r-grey-04 bg-black-01 text-grey-01">
            {/* top nav links */}
            {/* <div>
                <h1>sidebar</h1>
                <h1>sidebar</h1>
                <h1>sidebar</h1>
                <h1>sidebar</h1>
                <h1>sidebar</h1>
            </div> */}
            {/* bottom nav links */}

            <SvgWrapper size="large">
                <UserAccount color="currentColor" />
            </SvgWrapper>
            <SvgWrapper size="medium">
                <UserAccount color="blue" />
            </SvgWrapper>
            <SvgWrapper size="small">
                <UserAccount color="white" />
            </SvgWrapper>
        </aside>
    )
}

export default SidebarNav
