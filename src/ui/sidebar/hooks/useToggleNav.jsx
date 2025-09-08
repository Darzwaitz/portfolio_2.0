import { useState } from 'react'

export default function useToggleNav() {
    const [toggleNav, setToggleNav] = useState(false)

    const onHandleToggleNav = () => {
        if (toggleNav === true) {
            setToggleNav(false)
        }
        setToggleNav((show) => !show)
    }

    return { toggleNav, onHandleToggleNav }
}
