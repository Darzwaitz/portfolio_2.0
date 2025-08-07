// search bar / current page notification
import { useCurPage } from '../../contexts/CurPageContext'

function HeaderSearchnavbar() {
    // from context
    const { curPageName } = useCurPage()
    // console.log(curPageName)

    return (
        <div
            id="header-search-navbar"
            className="border-grey-07 bg-grey-03 text-grey-06 relative m-auto grow rounded-lg border py-1 pb-2 text-center text-sm sm:w-[22rem] sm:grow-0 md:w-[36rem]"
        >
            {/* customize layout bar */}
            {/* NB temp height REMOVE LATER*/}
            <div className="bg-green-01 text-grey-02 absolute top-0 h-[14rem] w-full rounded-lg">
                <h1> customize layout</h1>
            </div>
            <span className="">{curPageName}</span>
        </div>
    )
}

export default HeaderSearchnavbar
