import ArrowIcon from './assets/imgs/svg/components/ArrowIcon'
import CloseButton from '@/assets/imgs/svg/components/CloseButton'

function ExplorerSubitem() {
    return (
        <>
            <span className="mr-1 w-5 self-center">
                <ArrowIcon />
            </span>
            <h1 className="mr-auto self-center pb-0.5">EXPLORER</h1>
            {/* <CloseButton onToggleExplorer={onToggleExplorer} /> */}
            <span className="self-center">
                <CloseButton />
            </span>
        </>
    )
}

export default ExplorerSubitem
