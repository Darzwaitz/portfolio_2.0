import NavArrowButton from './assets/imgs/svg/components/navigationarrows/NavArrowButton'

import { SvgSettingsMedium } from '@/assets/imgs/svg/components/SvgSettings'
const { hover } = SvgSettingsMedium()

// svg paths sent in as prop
/* arrow-left.svg */
const navArrowLeft =
    'M7 3.093l-5 5V8.8l5 5 .707-.707-4.146-4.147H14v-1H3.56L7.708 3.8 7 3.093z'
/* arrow-right.svg */
const navArrowRight =
    'M9 13.887l5-5V8.18l-5-5-.707.707 4.146 4.147H2v1h10.44L8.292 13.18l.707.707z'

const navArrowStyles = `text-grey-06 z-50 rounded-sm p-[3px] ${hover}`

function NavArrows() {
    // using header to show these conditionally
    return (
        <>
            <NavArrowButton
                arrowDirection={navArrowLeft}
                tooltipMsg="Go Back (Alt+LeftArrow)"
                customStyles={navArrowStyles}
            />
            <span className="w-2"></span>
            <NavArrowButton
                arrowDirection={navArrowRight}
                tooltipMsg="Go Forward (Alt+RightArrow)"
                customStyles={navArrowStyles}
            />
        </>
    )
}

export default NavArrows
