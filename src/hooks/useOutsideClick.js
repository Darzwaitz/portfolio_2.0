import { useEffect } from 'react'

export default function useOutsideClick() {
    console.log('useOutsideClick Calld')

    useEffect(
        () =>
            document.addEventListener(
                'click',
                function outsideClick() {
                    console.log('event listener called')
                    // setShow(false)
                    // document.removeEventListener('click', outsideClick)
                },
                { options: true }
            ),
        []
    )
}
