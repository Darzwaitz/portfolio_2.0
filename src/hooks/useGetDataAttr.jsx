import { usePanels } from '@/contexts/PanelsContext'
import useToggleNav from '../ui/sidebar/hooks/useToggleNav'

function useGetDataAttr() {
    const { onTogglePanels } = usePanels()
    return function getChildSvgData(e) {
        console.log(e.target.id)
        const toggleNav = useToggleNav

        // don't fire on section container
        if (e.target.id === 'panels-svg-wrapper') return
        if (e.target.id === 'remote-button') toggleNav()

        // NB: class of pointer events none on tooltip comp to stop this firing on the svg itself

        const elToSend = e.target.querySelector('svg').dataset.panel

        // only call onTogglePanels if elToSend is truthy
        if (elToSend) onTogglePanels(elToSend)
        return
    }
}

export default useGetDataAttr
