import { useState } from 'react'

export default function useDarkMode() {
    let [darkMode, setDarkMode] = useState()

    const onSetDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return { darkMode, onSetDarkMode }
}
// import { useState } from 'react'

// export default function useDarkMode() {
//     let [darkMode, setDarkMode] = useState(true)

//     const onSetDarkMode = () => {
//         setDarkMode(!darkMode)
//     }

//     return { darkMode, onSetDarkMode }
// }
