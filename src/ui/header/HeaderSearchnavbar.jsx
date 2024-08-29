// search bar / current page notification
import { useCurPage } from '../../contexts/CurPageContext'
// const { curPageList } = useCurPage()
function HeaderSearchnavbar() {
    // from context
    // const { curPageName, onCurPageName } = useCurPage()
    // const { curPageName } = useCurPage()
    const { curPageList } = useCurPage()
    console.log(curPageList)

    // console.log(curPageName, onCurPageName)

    return (
        <div className="m-auto rounded-lg border border-grey-07 bg-grey-03 px-40 py-1 pb-2 text-sm text-grey-06">
            {/* {curPageName} */}
            {/* {onCurPageName} */}
            {curPageList}
        </div>
    )
}

export default HeaderSearchnavbar
