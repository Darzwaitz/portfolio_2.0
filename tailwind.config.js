/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'black-01':
                '#181818' /* main dark black secondary main-black - main bckgrd of active page -  */,
            'black-02': '#1f1f1f' /* secondary main-black - */,

            'grey-04': '#3b3b3b' /* suggestion box - grey-borders */,

            'black-03': '#161616' /* tertiary main-black - watermark logo */,

            'black-04':
                '#252525' /* search bar - nav page display main-black */,

            'blue-01':
                '#0078d4' /* hover border & button-blue - open remote window button - vscode logo main dark-blue */,

            'blue-02': '#0076b9' /* vscode logo light-blue */,

            'grey-01': '#868686' /* nav icons inactive */,

            'grey-02': '#d2d2d2' /* nav icons hoveractive */,

            'grey-03': '#313131' /* grey-borders */,

            'grey-05':
                '#2c2d2d' /* active bcgrd-grey hover nav & terminal icons hover */,
            'grey-06': '#cccccc' /*  */,
            'grey-07': '#74787c' /* suggestion box border */,
            'grey-08': 'rgb(71, 71, 71)' /* suggestion box border */,

            'green-01': '#0dac6e' /* bash terminal-green */,

            'pink-01': '#b24db2' /*  */,

            'yellow-01': '#d8d610' /* bash terminal-yellow & tilde */,

            'blue-03': '#119fc6' /* bash terminal-blue */,
        },
        extend: {
            fontFamily: {
                sans: ['"CascadiaMono"'],
            },
        },
    },
    plugins: [],
}
