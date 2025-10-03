import { usePanels } from '@/contexts/PanelsContext'

function SvgIconwrapper({ iconSize, hover, customStyles, children }) {
    const { onTogglePanels } = usePanels()

    function getChildSvgData(e) {
        console.log('iconwrapper')
        // const elToSend = e.target.children[0].children[0].dataset.test
        // NB: class of pointer events none on tooltip comp to stop this firing on the svg itself
        const elToSend = e.target.querySelector('svg').dataset.panel

        // only call onTogglePanels if elToSend is truthy
        if (elToSend) onTogglePanels(elToSend)
        return
    }

    if (iconSize === 'large')
        return (
            <div className="group relative inline-block cursor-pointer">
                {children}
            </div>
        )

    if (iconSize === 'medium')
        return (
            // <div
            //     onClick={getChildSvgData}
            //     // className={'group relative inline-block cursor-pointer'}
            //     className={'group relative cursor-pointer'}
            // >
            <div
                onClick={getChildSvgData}
                // className={'group relative inline-block cursor-pointer'}
                className={'group relative cursor-pointer'}
            >
                <div
                    // if customStyles, use customStyles hover, else passed in hover styles
                    className={`${customStyles ? '' : hover}${customStyles ? customStyles : 'text-grey-06 z-50 rounded-sm p-[3px]'}`}
                >
                    {children}
                </div>
            </div>
        )
}

export default SvgIconwrapper
