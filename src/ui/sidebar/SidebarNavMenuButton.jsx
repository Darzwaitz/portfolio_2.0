import NavMenuIcon from './assets/imgs/svg/components/NavMenuIcon'

function SidebarNavMenuButton({ handleToggleNav }) {
    return (
        <div
            id="sidebar-nav-menu"
            className="z-[9999] lg:hidden"
            // onClick={[handleToggleNav, closeSideNavMenu]}
            onClick={handleToggleNav}
        >
            <NavMenuIcon />
        </div>
    )
}

export default SidebarNavMenuButton
