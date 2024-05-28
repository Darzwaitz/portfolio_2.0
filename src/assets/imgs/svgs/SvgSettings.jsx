// TODO to be imported from new column nav comp.
const arrowDirectionValue = 'left'

const arrowDirection = arrowDirectionValue

export function SvgSettingsLarge() {
    return {
        defaultColor: 'currentColor',
        hover: 'hover:fill-grey-02',
        arrowDirection,
    }
}

export function SvgSettingsMedium() {
    return {
        defaultColor: '',
        hover: 'hover:fill-',
        arrowDirection,
    }
}

export function SvgSettingsSmall() {
    return {
        defaultColor: '',
        hover: 'hover:fill-',
        arrowDirection,
    }
}
