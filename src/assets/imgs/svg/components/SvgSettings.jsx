export function SvgSettingsLarge() {
    return {
        defaultColor: 'currentColor',
        hover: 'hover:fill-grey-02',
        iconSize: 'large',
    }
}

export function SvgSettingsMedium() {
    return {
        defaultColor: 'currentColor',
        // hover: 'hover:fill-grey-02 hover:bg-grey-01',
        hover: 'hover:bg-grey-08 ',
        svgStylesMedium: 'w-5',
        iconSize: 'medium',
        arrowDirection: 'up',
        arrowDirectionWithFix: 'upOverFlowXFix',
    }
}

export function SvgSettingsSmall() {
    return {
        defaultColor: '',
        hover: 'hover:fill-',
        iconSize: 'small',
    }
}
