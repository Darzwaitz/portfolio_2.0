import ReactIcon from '../features/portfolio/assets/imgs/svg/components/ReactIcon'
import HtmlIcon from '../features/portfolio/assets/imgs/svg/components/HtmlIcon'

function portfolioItemList() {
    return [
        {
            title: 'portfolio item 1',
            description: 'This is the REACT item 1 description',
            tags: ['React'],
            icon: [<ReactIcon key={'react'} />],
        },

        {
            title: 'portfolio item 2',
            description: 'This is the JAVASCRIPT item 2 description',
            // tags: ['Javascript'],
            tags: ['Html'],
            icon: [<HtmlIcon key={'html'} />],
        },
        {
            title: 'portfolio item 2',
            description: 'This is the CSS item 2 description',
            tags: ['React', 'Html'],
            icon: [<ReactIcon key={'react'} />, <HtmlIcon key={'html'} />],
        },

        // {
        //     title: 'portfolio item 3',
        //     description: 'This is the item 3 description',
        //     tags: ['html', 'css', 'javascript'],
        // },
        // {
        //     title: 'portfolio item 4',
        //     description: 'This is the item 4 description',
        //     tags: ['html', 'scss', 'css'],
        // },
        // {
        //     title: 'portfolio item 5',
        //     description: 'This is the item 5 description',
        //     tags: ['angular', 'javascript'],
        // },
        // {
        //     title: 'portfolio item 6',
        //     description: 'This is the item 6 description',
        //     tags: ['vue', 'tailwind', 'javascript'],
        // },
    ]
}

export default portfolioItemList()
