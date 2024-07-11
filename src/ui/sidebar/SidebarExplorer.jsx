// import CloseButton from '@/assets/imgs/svg/components/CloseButton'
import ExplorerSubitem from './ExplorerSubitem'
import SearchProjectsSubitem from './SearchProjectsSubitem'
import AllProjectsSubitem from './AllProjectsSubitem'
import ShowcaseProjectsSubitem from './ShowcaseProjectsSubitem'
// import { useState } from 'react'

// function ExplorerMenuItem({ onToggleExplorer, title, closebutton, pointer }) {
// function ExplorerMenuItem({ pointer }) {
//     return (
//         <div
//             style={pointer && { cursor: 'pointer' }}
//             className="flex w-full items-center justify-between"
//         >
//             {/* <h1 className="pb-0.5">{title}</h1>
//             {closebutton && <CloseButton onToggleExplorer={onToggleExplorer} />} */}
//         </div>
//     )
// }

// onToggleExplorer={handleToggleExplorer} from SidebarNav, not PanelsContext
function SidebarExplorer({ onToggleExplorer }) {
    // const [showArrow, setShowArrow] = useState(true)

    // const closebutton = true
    // const pointer = true

    // let [reveal, setReveal] = useState(false)

    // function handleReveal() {
    //     setReveal(!reveal)
    // }
    return (
        <section className="w-max border-l-[1px] border-r-[1px] border-l-grey-04  border-r-grey-04 bg-black-01 text-grey-01">
            <ul className=" mt-3 flex flex-col">
                {[
                    <ExplorerSubitem
                        key={'01'}
                        onToggleExplorer={onToggleExplorer}
                    />,
                    <AllProjectsSubitem key={'02'} />,
                    <SearchProjectsSubitem key={'03'} />,
                    <ShowcaseProjectsSubitem key={'04'} />,
                ].map((menuitem) => (
                    <li key={menuitem.key}>{menuitem}</li>
                ))}
            </ul>
        </section>
    )
}

export default SidebarExplorer

{
    /*                 
                {[
                    <ExplorerMenuItem
                        onToggleExplorer={onToggleExplorer}
                        closebutton={closebutton}
                        title={'EXPLORER'}
                        key={'01'}
                    />,
                    <ExplorerMenuItem title={'ALL PROJECTS'} key={'02'} />,
                    // <ExplorerMenuItem
                    //     title={'SEARCH PROJECTS'}
                    //     pointer={pointer}
                    //     key={'03'}
                    // />,
                    <SearchProjects key={'03'} />,
                    <ExplorerMenuItem title={'SHOWCASE PROJECTS'} key={'04'} />,
                ].map((menuitem) => (
                    <li
                        key={menuitem.key}
                        className="mb-[1.57rem] flex cursor-text  border-b-[1px] border-t-[1px] border-b-grey-04 border-t-grey-04 p-1 pr-4 text-sm text-grey-02 hover:brightness-110"
                    >
                        <span className="mr-1 w-5 self-start pt-0.5">
                            <ArrowIcon />
                        </span>
                        {menuitem}
                    </li>
                ))} */
}
