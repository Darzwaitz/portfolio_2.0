import TogglePanels from './TogglePanels'

function CustomizeLayoutMenu() {
    return (
        <div className="bg-black-02 text-grey-02 current border-grey-04c absolute top-[-0.5%] right-[-0.5%] -mt-[1px] w-[102%] overflow-clip rounded-lg border shadow-[0px_0px_11px_0px_#0f0f0f89]">
            <div className="bg-grey-04c">
                <h2 className="text-grey-09 pb-1.5">Customize Layout</h2>
            </div>
            <div className="px-2 py-1">
                <TogglePanels customizeLayoutStyles={true} />
            </div>
        </div>
    )
}

export default CustomizeLayoutMenu
