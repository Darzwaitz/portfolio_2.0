import NavMenuButton from './NavMenuButton'

function SidebarNavMenuButton({ onToggleNav }) {
    return (
        <div
            // id="sidebar-nav-menu"
            className="z-[9999] lg:hidden"
            onClick={onToggleNav}
        >
            <NavMenuButton />
        </div>
    )
}

export default SidebarNavMenuButton
