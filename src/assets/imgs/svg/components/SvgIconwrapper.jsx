import { usePanels } from '@/contexts/PanelsContext'

function SvgIconwrapper({ iconSize, hover, children }) {
    const { onTogglePanels } = usePanels()

    function getChildSvgData(e) {
        // const elToSend = e.target.children[0].children[0].dataset.test
        // NB: class of pointer events none on tooltip comp to stop this firing on the svg itself
        const elToSend = e.target.querySelector('svg').dataset.panel

        onTogglePanels(elToSend)
    }

    if (iconSize === 'large')
        return (
            <div className="group relative inline-block cursor-pointer">
                {children}
            </div>
        )

    if (iconSize === 'medium')
        return (
            <div
                onClick={getChildSvgData}
                className={'group relative inline-block'}
            >
                <div className={`${hover} z-50 rounded-sm p-[3px] text-grey-06`}>
                    {children}
                </div>
            </div>
        )
}

export default SvgIconwrapper
