import { usePanels } from '@/contexts/PanelsContext'

function SvgIconwrapper({ iconSize, hover, children }) {
    const { handleTogglePanels } = usePanels()

    function getChildSvgData(e) {
        // const elToSend = e.target.children[0].children[0].dataset.test
        // NB: class of pointer events none on tooltip comp to stop this firing on the svg itself
        const elToSend = e.target.querySelector('svg').dataset.panel

        handleTogglePanels(elToSend)
    }
    if (iconSize === 'medium')
        return (
            <div
                onClick={getChildSvgData}
                className={'inline-bloc group relative'}
            >
                <div className={`${hover} z-50 rounded p-[3px] text-grey-06`}>
                    {children}
                </div>
            </div>
        )

    return <div className="group relative inline-block">{children}</div>
}

export default SvgIconwrapper
