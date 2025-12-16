// import AllFolderIcon from '../features/portfolio/assets/imgs/svg/components/AllFolderIcon'
import ReactIcon from '../features/portfolio/assets/imgs/svg/components/ReactIcon'
import VueIcon from '../features/portfolio/assets/imgs/svg/components/VueIcon'
import AngularIcon from '../features/portfolio/assets/imgs/svg/components/AngularIcon'
import JavaScriptIcon from '../features/portfolio/assets/imgs/svg/components/JavaScriptIcon'
import ScssIcon from '../features/portfolio/assets/imgs/svg/components/ScssIcon'
import TailwindIcon from '../features/portfolio/assets/imgs/svg/components/TailwindIcon'
import WordpressIcon from '../features/portfolio/assets/imgs/svg/components/WordpressIcon'
// import HtmlIcon from '../features/portfolio/assets/imgs/svg/components/HtmlIcon'
import placeholderimage from '../assets/imgs/image-placeholder-landscape.png'

function portfolioItemsList() {
    // console.log('portfolioItemsList RUN')

    return [
        {
            title: 'portfolio item 1',
            description: 'This is the REACT item 1 description',
            tags: ['React'],
            icon: [<ReactIcon key={'react'} />],
            imageSrc: placeholderimage,
            link: 'react url',
        },

        {
            title: 'portfolio item 2',
            description: 'This is the SCSS item 2 description',
            // tags: ['Javascript'],
            tags: ['Scss'],
            icon: [<ScssIcon key={'scss'} />],
            link: 'scss url',
        },
        {
            title: 'portfolio item 2B also scss',
            description: 'This is the SCSS item 2 description',
            // tags: ['Javascript'],
            tags: ['Scss'],
            icon: [<ScssIcon key={'scss'} />],
            link: 'scss url',
        },
        {
            title: 'portfolio item 3',
            description: 'This is the REACT & HTML item 3 description',
            tags: ['React', 'Html'],
            icon: [<ReactIcon key={'react'} />],
            link: 'react & html url',
        },
        {
            title: 'portfolio item 4',
            description: 'This is the VUE item 4 description',
            tags: ['Vue'],
            icon: [<VueIcon key={'vue'} />],
            link: 'vue url',
        },
        {
            title: 'portfolio item 5',
            description: 'This is the Angular item 5 description',
            tags: ['Angular'],
            icon: [<AngularIcon key={'angular'} />],
            link: 'angular url',
        },
        {
            title: 'portfolio item 6',
            description: 'This is the Wordpress item 6 description',
            tags: ['Wordpress'],
            icon: [<WordpressIcon key={'wordpress'} />],
            link: 'wordpress url',
        },
        {
            title: 'portfolio item 7',
            description: 'This is the JS item 7 description',
            tags: ['JavaScript'],
            icon: [<JavaScriptIcon key={'javascript'} />],
            link: 'js url',
        },
        {
            title: 'portfolio item 8',
            description: 'This is the Tailwind item 8 description',
            tags: ['Tailwind'],
            icon: [<TailwindIcon key={'tailwind'} />],
            link: 'tailwind url',
        },
        // ,
        // {
        //     title: 'portfolio item 9',
        //     description: 'This is the Tailwind item 9 description',
        //     tags: ['All'],
        //     icon: [<AllFolderIcon key={'allfolder'} />],
        // },

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

export default portfolioItemsList()
