import { useState } from 'react'

export default function useToggleNav() {
    const [toggleNav, setToggleNav] = useState(false)

    const onHandleToggleNav = () => {
        if (toggleNav === true) {
            setToggleNav(false)
            // console.log(toggleNav)
            //   return document.removeEventListener('click', clickOutside)
        }
        setToggleNav((show) => !show)
    }

    return { toggleNav, onHandleToggleNav }
}
