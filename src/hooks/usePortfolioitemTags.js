import { useFilter } from '../contexts/FilteritemsContext'

export default function usePortfolioitemTags() {
    const { items } = useFilter()

    const checkStateTags = []
    items?.map(
        (item) =>
            // item.checked === true ? checkStateTags.push(item.name) : ''
            item.checked && checkStateTags.push(item.name)
    )
    // console.log('checkStateList RUN')
    // console.log(checkStateTags)

    return checkStateTags
}
