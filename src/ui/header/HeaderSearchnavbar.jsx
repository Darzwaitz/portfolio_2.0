// search bar / current page notification
import { useCurPage } from '../../contexts/CurPageContext'

function HeaderSearchnavbar() {
    // from context
    const { curPageName } = useCurPage()
    // console.log(curPageName)

    return (
        <div
            id="header-search-navbar"
            className="border-grey-07 bg-grey-03 text-grey-06 m-auto w-[10rem] rounded-lg border py-1 pb-2 text-center text-sm sm:w-[22rem] md:w-[30rem]"
        >
            <span className="">{curPageName}</span>
        </div>
    )
}

export default HeaderSearchnavbar
