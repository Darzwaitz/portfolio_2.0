// search bar / current page notification
import { useCurPage } from '../../contexts/CurPageContext'

function HeaderSearchnavbar() {
    // from context
    const { curPageName } = useCurPage()

    return (
        <div className="m-auto rounded-lg border border-grey-07 bg-grey-03 px-40 py-1 pb-2 text-sm text-grey-06">
            {curPageName}
        </div>
    )
}

export default HeaderSearchnavbar
