// files.svg
import { SvgSettingsLarge } from './SvgSettings'
const { defaultColor, hover } = SvgSettingsLarge()

function ExplorerView() {
    return (
        <svg
            className={hover}
            width="100%"
            height=""
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            // fill={props.color}
            fill={defaultColor}
        >
            <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" />
        </svg>
    )
}

export default ExplorerView
