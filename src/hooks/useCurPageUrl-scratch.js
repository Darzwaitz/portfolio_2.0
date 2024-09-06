// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import { useCurPage } from '../contexts/CurPageContext'

// export function useCurPageUrl() {
//     const { curPageList, onCurPageName } = useCurPage()

//     let location = useLocation()

//     useEffect(() => {
//         console.log('usey run')
//         if (location.pathname !== '/')
//             onCurPageName(
//                 location.pathname.slice(1, location.pathname.length + 1)
//             )

//         onCurPageName(
//             `${curPageList[0].slice(1, 2)} \u00A0${curPageList[0].slice(0, 1)}`
//         )
//     })
// }
