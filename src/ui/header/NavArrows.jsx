import NavLeftArrow from './assets/imgs/svg/components/navigationarrows/NavLeftArrow'
import NavRightArrow from './assets/imgs/svg/components/navigationarrows/NavRightArrow'

function NavArrows() {
    // using header to show these conditionally
    return (
        <>
            <NavLeftArrow />
            <span>&nbsp;&nbsp;</span>
            <NavRightArrow />
        </>
    )
}

export default NavArrows
