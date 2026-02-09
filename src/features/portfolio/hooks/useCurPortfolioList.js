// import { useFilter } from '../contexts/FilteritemsContext'
import portfolioItemsList from '../../../data/portfolioItemsList'
import usePortfolioitemTags from '../../../hooks/usePortfolioitemTags'

export default function useCurPortfolioList() {
    const portfolioitemTags = usePortfolioitemTags()

    const curItemsList = []

    portfolioItemsList.map(function (project) {
        // let newList = [portfolioitemTags.includes(...project.tags)]

        portfolioitemTags.includes(...project.tags) &&
            curItemsList.push(project)
    })
    // console.log('useCurPortfolioItems called')

    // console.log(curItemsList)

    // curItemsList.map((item) => item.id)
    // intruction && curItemsList.map((item) => console.log(item.id))
    // intruction && console.log('cld')

    return curItemsList
}
