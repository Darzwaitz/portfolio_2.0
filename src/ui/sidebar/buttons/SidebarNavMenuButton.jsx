import NavMenuButton from './NavMenuButton'

function SidebarNavMenuButton({ handleToggleNav }) {
    return (
        <div
            id="sidebar-nav-menu"
            className="z-[9999] lg:hidden"
            onClick={handleToggleNav}
        >
            <NavMenuButton />
        </div>
    )
}

export default SidebarNavMenuButton
