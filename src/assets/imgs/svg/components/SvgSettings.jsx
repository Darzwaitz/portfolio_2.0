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
        defaultColor: 'currentColor',
        // hover: 'hover:fill-grey-02 hover:bg-grey-01',
        hover: ' hover:bg-grey-08',
        arrowDirection: 'up',
    }
}

export function SvgSettingsSmall() {
    return {
        defaultColor: '',
        hover: 'hover:fill-',
        arrowDirection,
    }
}
