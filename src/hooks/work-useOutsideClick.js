// close the current maximized item
export default function useOutsideClick(maximize, setMaximize, setToggleNav) {
    console.log('sidebar icon clik')
    // console.log(e)

    return function (e) {
        console.log(e.target.id)

        if (e?.currentTarget?.id === 'sidebar-nav-menu') {
            console.log('listener added')
            setTimeout(() =>
                document.addEventListener('click', outsideItemClick)
            )
            //  console.log(e.currentTarget.id)
            //  return
        } else if (!maximize) {
            e?.currentTarget?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            })
            // using zero second setTimeout to mitigate event listener being called prematurely
            setTimeout(() =>
                document.addEventListener('click', outsideItemClick)
            )
        }

        function outsideItemClick(e) {
            console.log('other is ' + e.target.id)

            const curElemId = e.target.id

            // close the current maximized item onClick of these element ids
            if (
                curElemId === 'itemscontainerwrapper' ||
                curElemId === 'itemscontainerwrapper' ||
                curElemId === 'bg-items-wrapper' ||
                curElemId === 'outlet'
            ) {
                console.log('listener executed')

                // outside click for SidebarNav to be closed if open

                // if (setMaximize) setMaximize(false)
                // console.log(setToggleNav)
                // console.log(setToggleNav)

                setToggleNav?.()
                setMaximize?.(false)
                // if (toggleNav) setMaximize(false)
                return document.removeEventListener('click', outsideItemClick)
            }
            // removal needed here for 2nd click on maximize button when item is already maximized
            if (curElemId === 'maximize-button') {
                return document.removeEventListener('click', outsideItemClick)
            }
        }

        // if (setMaximize) setMaximize(!maximize)
        setMaximize?.(!maximize)
    }
}
