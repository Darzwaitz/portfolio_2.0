import useCurPortfolioList from './useCurPortfolioList'

export default function useDeletePortfolioItem() {
    const curFilteredItemsList = useCurPortfolioList()

    const curEditedItemsList = []

    curFilteredItemsList.map(function (project) {
        // let newList = [portfolioitemTags.includes(...project.tags)]

        // portfolioitemTags.includes(...project.tags) &&
        curEditedItemsList.push(project)
        // console.log(project.id)
    })

    // curItemsList.map((item) => item.id)
    // intruction && curItemsList.map((item) => console.log(item.id))
    // console.log(curEditedItemsList)

    // return curEditedItemsList
    // return

    // console.log('cld')
    return () => console.log('cld')
}
