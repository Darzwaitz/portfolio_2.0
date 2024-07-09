import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import CloseButton from '@/assets/imgs/svg/components/CloseButton'

function ExplorerSubitem() {
    return (
        <>
            <span className="mr-1 w-5 self-start pt-0.5">
                <ArrowIcon />
            </span>
            <h1 className="pb-0.5">EXPLORER</h1>
            {/* <CloseButton onToggleExplorer={onToggleExplorer} /> */}
            <CloseButton />
        </>
    )
}

export default ExplorerSubitem
