import { useState } from 'react'

export default function useDarkMode() {
    let [darkMode, setDarkMode] = useState(true)
    console.log('called')

    // if (localStorage.getItem('theme') === 'light') {
    //     console.log('localstorage is theme light')

    //     document.documentElement.classList.toggle('light')
    //     setDarkMode(false)
    // }
    // if (!localStorage.getItem('theme')) {
    //     console.log('localstorage is theme light')
    //     console.log('localstorage is not theme light')
    // }

    // const onSetDarkMode = () => {
    //     if (localStorage.getItem('theme')) {
    //         localStorage.clear()
    //         document.documentElement.classList.toggle('light')
    //         setDarkMode(true)
    //     } else {
    //         localStorage.setItem('theme', 'light')
    //         document.documentElement.classList.toggle('light')
    //         setDarkMode(false)
    //     }
    //     console.log('callddddd')

    //     console.log('onSetDarkage b4: ' + darkMode)

    //     // setDarkMode(!darkMode)
    //     console.log('onSetDarkage efter: ' + darkMode)
    //     return darkMode
    // }

    return { darkMode, setDarkMode }
}
// import { useState } from 'react'

// export default function useDarkMode() {
//     let [darkMode, setDarkMode] = useState(true)

//     const onSetDarkMode = () => {
//         setDarkMode(!darkMode)
//     }

//     return { darkMode, onSetDarkMode }
// }
