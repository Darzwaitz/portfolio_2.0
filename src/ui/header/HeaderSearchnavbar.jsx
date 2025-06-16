// search bar / current page notification
import { useCurPage } from '../../contexts/CurPageContext'

function HeaderSearchnavbar() {
    // from context
    const { curPageName } = useCurPage()
    console.log(curPageName)

    return (
        <div className="border-grey-07 bg-grey-03 text-grey-06 m-auto rounded-lg border px-40 py-1 pb-2 text-sm">
            {curPageName}
        </div>
    )
}

export default HeaderSearchnavbar
