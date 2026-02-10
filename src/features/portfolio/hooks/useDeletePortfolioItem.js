import useCurPortfolioList from './useCurPortfolioList'

export default function useDeletePortfolioItem(deleteId) {
    const curFilteredItemsList = useCurPortfolioList()
    // console.log('this ' + curFilteredItemsList)

    // const curItemsListRaw = []

    const curEditedItemsList = []

    curFilteredItemsList.map(function (project) {
        // let newList = [portfolioitemTags.includes(...project.tags)]

        // portfolioitemTags.includes(...project.tags) &&
        curEditedItemsList.push(project)
        // console.log(project.id)
    })
    console.log(curEditedItemsList)

    // return () => console.log(curEditedItemsList)
    // return () => console.log(curFilteredItemsList)
    return () => console.log(deleteId)
}
