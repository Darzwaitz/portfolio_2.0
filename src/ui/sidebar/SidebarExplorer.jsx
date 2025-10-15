import ExplorerSubitem from './ExplorerSubitem'
import SearchProjectsSubitem from './SearchProjectsSubitem'
import AllProjectsSubitem from './AllProjectsSubitem'
import ShowcaseProjectsSubitem from './ShowcaseProjectsSubitem'

// onToggleExplorer={handleToggleExplorer} from SidebarNav, not PanelsContext
function SidebarExplorer({ onToggleExplorer }) {
    return (
        <section
            // hide scrollbar
            style={{ scrollbarWidth: 'none' }}
            className="border-l-grey-04 border-r-grey-04 bg-black-01 text-grey-01 w-max overflow-auto border-r-[1px] border-l-[1px]"
        >
            <ul className="mt-[4.8rem] flex flex-col lg:mt-3">
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
