import NavMenuIcon from './assets/imgs/svg/components/NavMenuIcon'
import useOutsideClick from '@/hooks/useOutsideClick'

function SidebarNavMenuButton({ handleToggleNav }) {
    const closeSideNavMenu = useOutsideClick()

    return (
        <div
            id="sidebar-nav-menu"
            className="lg:hidden"
            // onClick={[handleToggleNav, closeSideNavMenu]}
            onClick={(e) => {
                handleToggleNav()
                closeSideNavMenu(e, handleToggleNav)
            }}
        >
            <NavMenuIcon />
        </div>
    )
}

export default SidebarNavMenuButton
