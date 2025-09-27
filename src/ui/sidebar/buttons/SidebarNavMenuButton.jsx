import NavMenuIconButton from './NavMenuIconButton'

function SidebarNavMenuButton({ handleToggleNav }) {
    return (
        <div
            id="sidebar-nav-menu"
            className="z-[9999] lg:hidden"
            onClick={handleToggleNav}
        >
            <NavMenuIconButton />
        </div>
    )
}

export default SidebarNavMenuButton
