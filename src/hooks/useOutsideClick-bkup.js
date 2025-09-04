// close the current maximized item
export default function useOutsideClick(maximize, setMaximize) {
    console.log('sidebar icon clik')

    return function (e) {
        if (!maximize) {
            e.target.scrollIntoView({
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
            const curElemId = e.target.id

            // close the current maximized item onClick of these element ids
            if (
                curElemId === 'itemscontainerwrapper' ||
                curElemId === 'itemscontainerwrapper' ||
                curElemId === 'bg-items-wrapper' ||
                curElemId === 'outlet'
            ) {
                // outside click for SidebarNav to be closed if open

                setMaximize(false)
                return document.removeEventListener('click', outsideItemClick)
            }
            // removal needed here for 2nd click on maximize button when item is already maximized
            if (curElemId === 'maximize-button') {
                return document.removeEventListener('click', outsideItemClick)
            }
        }

        setMaximize(!maximize)
    }
}
