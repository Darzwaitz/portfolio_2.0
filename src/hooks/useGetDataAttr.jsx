import { usePanels } from '@/contexts/PanelsContext'

function useGetDataAttr() {
    const { onTogglePanels } = usePanels()
    return function getChildSvgData(e) {
        // don't fire on section container
        if (e.target.id === 'svg-section-wrapper') return

        // NB: class of pointer events none on tooltip comp to stop this firing on the svg itself

        const elToSend = e.target.querySelector('svg').dataset.panel

        // only call onTogglePanels if elToSend is truthy
        if (elToSend) onTogglePanels(elToSend)
        return
    }
}

export default useGetDataAttr
