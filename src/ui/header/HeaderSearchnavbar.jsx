// search bar / current page notification

// import { useCurPage } from '@/contexts/CurPageContext'
import { useCurPageName } from '../../hooks/useCurPageName'
console.log(useCurPageName)

function HeaderSearchnavbar() {
    // const { curPageName } = useCurPageName()

    return (
        <div className="m-auto rounded-lg border border-grey-07 bg-grey-03 px-40 py-1 pb-2 text-sm text-grey-06">
            {/* {curPageName} */}
            {/* {onPageNameChange} */}
        </div>
    )
}

export default HeaderSearchnavbar
