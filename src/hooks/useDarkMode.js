import { useState } from 'react'

// dark mode on initial site load
let loadDarkMode = true
const htmlClassList = document.documentElement.classList

// on reload, if storage item existz, load light mode
if (localStorage.getItem('theme')) {
    loadDarkMode = false
    if (!htmlClassList.contains('light')) {
        htmlClassList.add('light')
    }
}

export default function useDarkMode() {
    let [darkMode, setDarkMode] = useState(loadDarkMode)

    function onSetDarkMode() {
        htmlClassList.toggle('light')

        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'light')
            setDarkMode(false)
        } else if (localStorage.getItem('theme')) {
            localStorage.removeItem('theme')
            // localStorage.clear()
            setDarkMode(true)
        }
    }

    return { darkMode, onSetDarkMode }
}
