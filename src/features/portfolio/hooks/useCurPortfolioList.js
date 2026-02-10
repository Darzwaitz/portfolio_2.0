// import { useFilter } from '../contexts/FilteritemsContext'
// import portfolioItemsList from '@/data/portfolioItemsList'
import usePortfolioItemsList from './usePortfolioItemsList'
import usePortfolioitemTags from '@/hooks/usePortfolioitemTags'

export default function useCurPortfolioList() {
    const portfolioItemsList = usePortfolioItemsList()
    const portfolioitemTags = usePortfolioitemTags()

    const curItemsList = []
    // const curItemsToDelete = []

    portfolioItemsList.map(function (project) {
        // let newList = [portfolioitemTags.includes(...project.tags)]

        portfolioitemTags.includes(...project.tags) &&
            curItemsList.push(project)
    })

    // portfolioItemsList.map(function (project) {
    //     // let newList = [portfolioitemTags.includes(...project.tags)]

    //     portfolioitemTags.includes(...project.tags) &&
    //         curItemsToDelete.push(project)
    // })

    // portfolioItemsList.map(function (project) {})

    //  iterate current curItemsList
    // for each item, if any items id is the same as another other items id - pop it off

    // const curItemsList = curItemsListRaw.filter((item) => item.id == item.id)

    // curItemsList.map((item) => item.id)

    return curItemsList
}
