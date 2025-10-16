export function SvgSettingsLarge() {
    return {
        // defaultColor: 'fill-grey-01',
        defaultColor: 'currentColor',
        hover: 'hover:fill-grey-02',
        iconSize: 'large',
    }
}

export function SvgSettingsMedium() {
    return {
        defaultColor: 'currentColor',
        hover: 'hover:bg-grey-08 ',
        svgStylesMedium: 'w-5',
        iconSize: 'medium',
        // for ToolTtip comp
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
