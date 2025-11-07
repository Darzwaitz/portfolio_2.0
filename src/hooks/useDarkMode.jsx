import { useState } from 'react'

export default function useDarkMode() {
    let [darkMode, setDarkMode] = useState(true)
    // console.log('called')

    if (localStorage.getItem('theme') === 'light') {
        console.log('localstorage is theme light')

        if (!document.documentElement.classList.contains('light')) {
            document.documentElement.classList.add('light')
        }
        // setDarkMode(false)
        console.log('called')
    }

    function onSetDarkMode() {
        // setDarkMode(!darkMode)
        if (localStorage.getItem('theme', 'light')) {
            localStorage.removeItem('theme')
            console.log('light set')
            setDarkMode(true)
        }
        if (!localStorage.getItem('theme')) {
            // console.log('localstorage is theme light')
            // console.log('localstorage is not theme light')
            // setDarkMode(false)
            localStorage.setItem('theme', 'light')
            setDarkMode(false)
        }
    }

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

    return { darkMode, setDarkMode, onSetDarkMode }
}
// import { useState } from 'react'

// export default function useDarkMode() {
//     let [darkMode, setDarkMode] = useState(true)

//     const onSetDarkMode = () => {
//         setDarkMode(!darkMode)
//     }

//     return { darkMode, onSetDarkMode }
// }

// let theme = localStorage.getItem('theme')
// console.log(localStorage.getItem('theme'))

// let [darkMode, setDarkMode] = useState(true)
// console.log(darkMode)

// if (localStorage.getItem('theme') === 'light') {
//     document.documentElement.classList.add('light')
//     // onSetDarkMode()
// }
// }
// localStorage.clear()

// if (darkMode === true) {
//     document.documentElement.classList.add('light')
//     localStorage.setItem('theme', 'light')
//     onSetDarkMode()
// }
// if (darkMode === false) {
//     document.documentElement.classList.remove('light')
//     localStorage.clear()
//     onSetDarkMode()
// }
