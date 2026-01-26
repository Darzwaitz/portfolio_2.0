import { SvgSettingsLarge } from '@/assets/imgs/svg/components/SvgSettings'
import { useCurPage } from '@/contexts/CurPageContext'

const { defaultColor, hover, iconSize } = SvgSettingsLarge()

import SvgIconwrapper from '@/assets/imgs/svg/components/SvgIconwrapper'
import UserAccountIcon from '../assets/imgs/svg/components/UserAccountIcon'
import Tooltip from '@/features/tooltip/Tooltip'

import { usePanels } from '@/contexts/PanelsContext'
import { Link } from 'react-router'

function UserAccountButton() {
    const { handleCurPageName } = useCurPage()
    const { togglePanels } = usePanels()

    let arrDir = togglePanels.tooltipArrDir
    return (
        <Link to="about" onClick={() => handleCurPageName('About')}>
            <SvgIconwrapper iconSize={iconSize} hover={hover}>
                <UserAccountIcon hover={hover} defaultColor={defaultColor} />
                <Tooltip msg={'About Page'} arrowDirection={arrDir} />
            </SvgIconwrapper>
        </Link>
    )
}

export default UserAccountButton
